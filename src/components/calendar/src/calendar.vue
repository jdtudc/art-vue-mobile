<template>
  <div class="artm-calendar">
    <artm-popup v-model="show" :unclickable="unclickable" @on-click-cancel="onClickCancel">
      <div class="artm-calendar-cont">
        <div class="artm-calendar-header" v-if="multi || showHeader">
          <div class="artm-calendar-cancel" v-text="cancelText" @click="onClickCancel"></div>
          <h3 class="artm-calendar-header-title">
            <slot name="title">{{title}}</slot>
          </h3>
          <div class="artm-calendar-confirm" v-text="confirmText" @click="onClickConfirm"></div>
        </div>
        <div class="artm-calendar-body">
          <div class="artm-calendar-body-title">
            <div class="artm-calendar-year">
              <a class="prev-year" href="javascript:;" @click="prevYear"></a>
              <span class="year" v-text="year"></span>
              <a class="next-year" href="javascript:;" @click="nextYear"></a>
            </div>
            <div class="artm-calendar-month">
              <a class="prev-month" href="javascript:;" @click="prevMonth"></a>
              <span class="month" v-text="Number(month)"></span>
              <a class="next-month" href="javascript:;" @click="nextMonth"></a>
            </div>
          </div>
          <div class="artm-calendar-box">
            <div class="artm-calendar-week">
              <ul>
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
              </ul>
            </div>
            <div class="artm-calendar-list">
              <ul>
                <li :class="[item.active && 'active', item.cur && 'cur', item.dark && 'dark', item.dis && 'dis']" v-for="(item, index) in list" :key="index" v-if="list && list.length > 0">
                  <a href="javascript:;" v-text="Number(item.day)" @click="clickDate(item)"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </artm-popup>
  </div>
</template>
<script>
	import {formatTime} from '../../../utils/formatTime'
	import {Screen} from '../../../utils/screen'
	import JrvmPopup from '../../popup/index'

	export default {
		name: 'artm-calendar',
		props: {
			// mask 是否可点击
			unclickable: {
				type: Boolean,
				default: false
			},
			value: Boolean,
      showHeader: Boolean,
			title: {
				type: String,
        default: '请选择日期'
      },
			cancelText: {
				type: String,
				default: '取消'
			},
			confirmText: {
				type: String,
				default: '确定'
			},
      // 是否为多选
      multi: Boolean,
      // 输出和输入格式
      format: {
				type: String,
        default: 'yyyy-MM-dd'
      },
      // 已选中
      chosen: {
				type: [String,Array],
        require: true
      },
      // 不可选日期
			disabledDate: Function
		},
    data () {
			return {
				show: this.value,
        // 默认进来展示的年
        year: null,
        // 默认进来展示的月
        month: null,
        // 展示的数据列表
        list: null,
        // 当前年
        curYear: null,
				// 当前月
				curMonth: null,
				// 当前日
				curDay: null,
        // 选中数据
        curChosen: null
			}
    },
    created () {
			if (!(~this.format.indexOf('yyyy') && ~this.format.indexOf('MM') && ~this.format.indexOf('dd'))) {
				console.error("format 格式有误，必须同时定义yyyy、MM和dd")
        return false
      }
    },
		methods: {
			init () {
				this.curChosen = null
				this.curYear = new Date().getFullYear()
				this.curMonth = new Date().getMonth() + 1
				this.curDay = new Date().getDate()
				if (this.multi) { // 多选
					if (this.chosen && this.chosen.length > 0) { // 有选中
            // 数组深拷贝，引用类型不能直接赋值
            [...this.curChosen] = this.chosen
						this.year = Number(this.curChosen[this.curChosen.length - 1].substr(this.format.indexOf('yyyy'), 4))
						this.month = Number(this.curChosen[this.curChosen.length - 1].substr(this.format.indexOf('MM'), 2))
          } else {
						this.curChosen = []
						this.year = this.curYear
						this.month = this.curMonth
          }
        } else {  // 单选
					if (this.chosen) {
						this.curChosen = this.chosen
						this.year = Number(this.curChosen.substr(this.format.indexOf('yyyy'), 4))
						this.month = Number(this.curChosen.substr(this.format.indexOf('MM'), 2))
          } else {
						this.year = this.curYear
						this.month = this.curMonth
          }
        }
        this.getDate()
      },
			getDate () {
				let year = this.year
				let month = this.month < 10 ? '0' + this.month : this.month
        let oneDayTs = 24 * 60 * 60 * 1000
				let startDay = new Date(year + '/' + month + '/01').getDay()   // 这个月第一天星期几 0表示星期天
				let startTime = +new Date(year + '/' + month + '/01')
				if (startDay !== 0) {
					startTime -= startDay * oneDayTs
				}
				let arr = []
        for (let i = 0; i < 7 * 5; i++) {
					arr.push({
						year: formatTime(startTime + i * oneDayTs, 'yyyy'),
						month: formatTime(startTime + i * oneDayTs, 'MM'),
						day: formatTime(startTime + i * oneDayTs, 'dd'),
            ts: startTime + i * oneDayTs,
            active: false
          })
        }
        arr.forEach((_) => {
					_.cur = (Number(_.year) === this.curYear && Number(_.month) === this.curMonth && Number(_.day) === this.curDay) ? true : false
          _.dark = ((Number(_.year) !== this.year) || (Number(_.year) === this.year && Number(_.month) !== this.month)) ? true : false
          if (this.disabledDate) {
						_.dis = this.disabledDate(_)
          } else {
						_.dis = false
          }
        })
				if (this.multi) {
          this.curChosen.forEach((_) => {
          	arr.forEach((day) => {
          		if (_ === this.format.replace('yyyy', day.year).replace('MM', day.month).replace('dd', day.day)) {
          			day.active = true
              }
            })
          })
        } else {
					arr.forEach((day) => {
						day.active = this.curChosen === this.format.replace('yyyy', day.year).replace('MM', day.month).replace('dd', day.day) ? true : false
					})
        }
        
        this.list = arr
			},
			clickDate (date) {
				if (this.multi) {
					if (date.active) {
						this.curChosen = this.curChosen.filter((_) => {
							return _ !== this.format.replace('yyyy', date.year).replace('MM', date.month).replace('dd', date.day)
            })
          } else {
						this.curChosen.push(this.format.replace('yyyy', date.year).replace('MM', date.month).replace('dd', date.day))
          }
					this.getDate()
				} else {
					this.curChosen = this.format.replace('yyyy', date.year).replace('MM', date.month).replace('dd', date.day)
					this.getDate()
					if (!this.showHeader) {
						this.onClickConfirm()
          }
        }
      },
      prevYear () {
				this.year -= 1
        this.getDate()
      },
			nextYear () {
				this.year += 1
				this.getDate()
			},
			prevMonth () {
				this.month -= 1
				this.getDate()
			},
			nextMonth () {
				this.month += 1
				this.getDate()
			},
			onClickConfirm () {
				this.show = false
				this.$emit('on-choose', this.curChosen)
      },
			onClickCancel () {
				this.show = false
				this.$emit("on-cancel");
			},
    },
		watch: {
			show (val) {
				this.$emit('input', val);

				//判断是否显示，开启关闭锁定屏幕滑动事件
				if(val) {
					this.init()
					Screen.lock();
				}else{
					Screen.unlock();
				}
			},
			value (val) {
				this.show = val;
			}
		},
		computed: {

		},
		components: {
			JrvmPopup
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/calendar";
</style>