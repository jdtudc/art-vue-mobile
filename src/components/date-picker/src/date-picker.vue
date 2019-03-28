<template>
  <div class="artm-date-picker">
    <artm-popup v-model="show" :unclickable="unclickable" @on-click-cancel="onClickCancel">
      <div class="artm-date-picker-cont">
        <div class="artm-date-picker-header">
          <div class="artm-date-picker-cancel" v-text="cancelText" @click="onClickCancel"></div>
          <h3 class="artm-date-picker-header-title" v-if="title">
            <slot name="title">{{title}}</slot>
          </h3>
          <div class="artm-date-picker-confirm" v-text="confirmText" @click="onClickConfirm"></div>
        </div>
        <div class="artm-date-picker-list" :class="[desc && 'artm-date-picker-list_reverse']" ref="dpList">
          <div class="artm-date-picker-item" :data-type="listItem.type" v-for="(listItem, index) in list" :key="index" v-if="list && list.length > 0" :ref="listItem.type">
            <ul :class="[trans && 'trans']">
              <li :class="[item.active && 'active']" v-for="(item ,idx) in listItem.list" :key="idx" :value="item.value" :data-index="idx" v-text="item.text"></li>
            </ul>
            <div class="artm-date-picker-item-mask"></div>
            <div class="artm-date-picker-item-border"></div>
          </div>
        </div>
      </div>
    </artm-popup>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmPopup from '../../popup/index'
	export default {
		name: 'artm-date-picker',
		props: {
			// mask 是否可点击
			unclickable: {
				type: Boolean,
				default: false
			},

			value: Boolean,
			// 可选择的内容
			format: {
				type: String,
				default: "yyyy-MM-dd"
			},
			title: String,
			cancelText: {
				type: String,
				default: '取消'
			},
			confirmText: {
				type: String,
				default: '确定'
			},
			// 是否展示倒序
			desc: Boolean,
			// 已选中
			chosen: String,

			// 最小年份
			minYear: Number,
			// 最大年份
			maxYear: Number,
			hourList: Array,
			minuteList: Array,
			// 最小可选日期
			startDate: String,
			// 最大可选日期
			endDate: String,

			// 自定义顺序
			order: {
				type: Object,
				default: () => {
					return {
						year: 1,
						month: 2,
						day: 3,
						hour: 4,
						minute: 5
					}
				}
			},
		},
		data() {
			return {
				show: this.value,
				hasYear: ~this.format.indexOf('yyyy'),
				hasMonth: ~this.format.indexOf('MM'),
				hasDay: ~this.format.indexOf('dd'),
				hasHour: ~this.format.indexOf('HH'),
				hasMinute: ~this.format.indexOf('mm'),
				// 数据
				list: null,
				// 带过渡效果
				trans: true,
				// 当前数据
				year: null,
				month: null,
				day: null,
				hour: null,
				minute: null,
				// 初始滚动位置
				startY: 0,
				startTop: 0,
			}
		},
		created() {
			if (this.hasDay) {
				if (!(this.hasYear && this.hasMonth)) {
					console.error("format 格式有误，dd 和 yyyy 以及 MM 必须同时使用")
					return false
				}
			}
			if ((this.minYear && !this.maxYear) || (!this.minYear && this.maxYear)) {
				console.error("最小可选年份和最大可选年份需同时使用")
				return false
			}
			if (this.minYear && this.maxYear && this.minYear > this.maxYear) {
				console.error("最小可选年份需小于等于最大可选年份")
				return false
			}
			if ((this.startDate && !this.endDate) || (!this.startDate && this.endDate)) {
				console.error("开始日期和结束日期需同时使用")
				return false
			}
		},
		methods: {
			init() {
				let order = this.order
				let arrStr = [{type: 'year', reg: 'yyyy'}, {type: 'month', reg: 'MM'}, {type: 'day', reg: 'dd'}, {type: 'hour', reg: 'HH'}, {type: 'minute', reg: 'mm'}].sort((a, b) => {
					return order[a.type] - order[b.type]
				})
				let arr = []
				arrStr.forEach((_, idx) => {
					if (~this.format.indexOf(_.reg)) {
						arr.push({type: _.type, list: this.getList(_.type), reg: _.reg})
					}
				})
				this.list = arr
				this.$nextTick(() => {
					this.setHeight()
					this.registerEvents()
				})
			},
			// 获取数据
			getList(type) {
				let curYear = new Date().getFullYear()
				let curMonth = new Date().getMonth() + 1
				let curDay = new Date().getDate()
				if (type === 'year') {
					this.year = this.chosen ? Number(this.chosen.substr(this.format.indexOf('yyyy'), 4)) : curYear
					return this.getYearList()
				}
				if (type === 'month') {
					this.month = this.chosen ? Number(this.chosen.substr(this.format.indexOf('MM'), 2)) : curMonth
					return this.getMonthList()
				}
				if (type === 'day') {
					this.day = this.chosen ? Number(this.chosen.substr(this.format.indexOf('dd'), 2)) : curDay
					return this.getDayList()
				}
				if (type === 'hour') {
					return this.getHourList()
				}
				if (type === 'minute') {
					return this.getMinuteList()
				}
			},
			// 设置高度
			setHeight() {
				this.list.forEach((_) => {
					let el = this.$refs[_.type][0]
					let activeIdx = _.list.findIndex((value, index) => {
						return value.active
					})
					el.setAttribute("data-top", -activeIdx * 34)
					el.children[0].style.webkitTransform = `translate3d(0, ${-activeIdx * 34}px, 0)`
					el.children[0].style.transform = `translate3d(0, ${-activeIdx * 34}px, 0)`
				})
			},
			// 注册事件
			registerEvents() {
				this.list.forEach((_) => {
					this.$refs[_.type][0].addEventListener("touchstart", this.handleTouchStart)
					this.$refs[_.type][0].addEventListener("touchmove", this.handleTouchMove)
					this.$refs[_.type][0].addEventListener("touchend", this.handleTouchEnd)
				})
			},
			// 销毁事件
			destroyEvents() {
				this.list.forEach((_) => {
					this.$refs[_.type][0].removeEventListener("touchstart", this.handleTouchStart)
					this.$refs[_.type][0].removeEventListener("touchmove", this.handleTouchMove)
					this.$refs[_.type][0].removeEventListener("touchend", this.handleTouchEnd)
				})
			},
			// 判断是否闰年
			isLeapYear() {
				return this.year % 100 !== 0 && this.year % 4 === 0 || this.year % 400 === 0
			},
			// 获取年列表
			getYearList() {
				let curYear = new Date().getFullYear()
				let minYear = this.minYear || curYear - 10
				let maxYear = this.maxYear || curYear
				if (this.startDate && this.endDate) {
					minYear = Number(this.startDate.substr(this.format.indexOf('yyyy'), 4))
					maxYear = Number(this.endDate.substr(this.format.indexOf('yyyy'), 4))
				}
				if (this.year < minYear || this.year > maxYear) {
					this.year = minYear
				}
				return new Array(maxYear - minYear + 1).fill().map((_, index) => {
					return {value: minYear + index, text: (minYear + index).toString(), active: (this.year === (minYear + index)) ? true : false}
				})
			},
			// 获取月列表
			getMonthList() {
				let minMonth = 1
				let maxMonth = 12
				if (this.startDate && this.endDate) {
					if (this.year === Number(this.startDate.substr(this.format.indexOf('yyyy'), 4))) {
						minMonth = Number(this.startDate.substr(this.format.indexOf('MM'), 2))
					}
					if (this.year === Number(this.endDate.substr(this.format.indexOf('yyyy'), 4))) {
						maxMonth = Number(this.endDate.substr(this.format.indexOf('MM'), 2))
					}
				}
				if (this.month < minMonth || this.month > maxMonth) {
					this.month = minMonth
				}
				return new Array(maxMonth - minMonth + 1).fill().map((_, index) => {
					return {value: minMonth + index, text: (minMonth + index) < 10 ? '0' + (minMonth + index) : (minMonth + index).toString(), active: (this.month === (minMonth + index)) ? true : false}
				})
			},
			// 获取日列表
			getDayList() {
				let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
				if (this.isLeapYear()) {
					arr[1] = 29
				}
				let minDay = 1
				let maxDay = arr[this.month - 1]
				if (this.startDate && this.endDate) {
					if (this.year === Number(this.startDate.substr(this.format.indexOf('yyyy'), 4)) && this.month === Number(this.startDate.substr(this.format.indexOf('MM'), 2))) {
						minDay = Number(this.startDate.substr(this.format.indexOf('dd'), 2))
					}
					if (this.year === Number(this.endDate.substr(this.format.indexOf('yyyy'), 4)) && this.month === Number(this.endDate.substr(this.format.indexOf('MM'), 2))) {
						maxDay = Number(this.endDate.substr(this.format.indexOf('dd'), 2))
					}
				}
				if (this.day < minDay || this.day > maxDay) {
					if (this.day < minDay) {
						this.day = minDay
          } else if (this.day > maxDay) {
						this.day = maxDay
          }
				}
				return new Array(maxDay - minDay + 1).fill().map((_, index) => {
					return {value: minDay + index, text: (minDay + index) < 10 ? '0' + (minDay + index) : (minDay + index).toString(), active: (this.day === (minDay + index)) ? true : false}
				})
			},
			// 获取小时数据
			getHourList() {
				if (this.hourList) {
					this.hour = this.chosen ? Number(this.chosen.substr(this.format.indexOf('HH'), 2)) : this.hourList[0]
					return this.hourList.map((_, index) => {
						return {value: _, text: _ < 10 ? '0' + _ : _.toString(), active: (this.hour === _) ? true : false}
					})
				} else {
					let curHour = new Date().getHours()
					this.hour = this.chosen ? Number(this.chosen.substr(this.format.indexOf('HH'), 2)) : curHour
					return new Array(24).fill().map((_, index) => {
						return {value: index, text: index < 10 ? '0' + index : index.toString(), active: (this.hour === index) ? true : false}
					})
				}
			},
			// 获取分钟数据
			getMinuteList() {
				if (this.minuteList) {
					this.minute = this.chosen ? Number(this.chosen.substr(this.format.indexOf('mm'), 2)) : this.minuteList[0]
					return this.minuteList.map((_, index) => {
						return {value: _, text: _ < 10 ? '0' + _ : _.toString(), active: (this.minute === _) ? true : false}
					})
				} else {
					let curMinute = new Date().getMinutes()
					this.minute = this.chosen ? Number(this.chosen.substr(this.format.indexOf('mm'), 2)) : curMinute
					return new Array(60).fill().map((_, index) => {
						return {value: index, text: index < 10 ? '0' + index : index.toString(), active: (this.minute === index) ? true : false}
					})
				}
			},
			onClickCancel() {
				this.show = false
				this.$emit("on-cancel");
			},
			onClickConfirm() {
				this.show = false
				this.$emit("on-choose", this.getResult())
			},
			// 事件监听
			handleTouchStart(e) {
				this.startTop = parseInt(e.target.parentElement.parentElement.getAttribute("data-top"))
				this.startY = e.changedTouches[0].clientY
			},
			handleTouchMove(e) {
				let move = e.changedTouches[0].clientY - this.startY
				let endTop = this.startTop + move
				let maxHeight = -e.target.parentElement.offsetHeight + 17

				endTop = endTop > 0 ? 0 : endTop < maxHeight ? maxHeight : endTop
				e.target.parentElement.parentElement.setAttribute("data-top", endTop)

				e.target.parentElement.style.webkitTransform = `translate3d(0,${endTop}px,0)`
				e.target.parentElement.style.transform = `translate3d(0,${endTop}px,0)`
				e.preventDefault()
			},
			handleTouchEnd(e) {
				// 类型
				let type = e.target.parentElement.parentElement.getAttribute("data-type")
				// 下标的相反值
				let realIdx = Math.round(parseFloat(e.target.parentElement.parentElement.getAttribute("data-top")) / 34)
				// 定位到的准确高度
				let resultTop = realIdx * 34
				e.target.parentElement.parentElement.setAttribute("data-top", resultTop)
				e.target.parentElement.style.webkitTransform = `translate3d(0,${resultTop}px,0)`
				e.target.parentElement.style.transform = `translate3d(0,${resultTop}px,0)`

				this.list.forEach((_) => {
					if (_.type === type) {
						_.list.forEach((__, idx) => {
							if (idx === Math.abs(realIdx)) {
								__.active = true
								this[type] = __.value
							} else {
								__.active = false
							}
						})
					}
				})

				if (type === 'year') {
					// 新年下的总月数
					let monthIdx = this.list.findIndex((value) => {
						return value.type === 'month'
					})
					this.list[monthIdx].list = this.getMonthList()
					let activeIdx = this.list[monthIdx].list.findIndex((value) => {
						return value.active
					})
					let el = this.$refs["month"][0]
					el.setAttribute("data-top", -activeIdx * 34)
					// 去除重设时动画
					this.trans = false
					el.children[0].style.webkitTransform = `translate3d(0, ${-activeIdx * 34}px, 0)`
					el.children[0].style.transform = `translate3d(0, ${-activeIdx * 34}px, 0)`
					let timer = setTimeout(() => {
						this.trans = true
						clearTimeout(timer)
					}, 20)
				}

				if (type === 'year' || type === 'month') {
					let dayIdx = this.list.findIndex((value) => {
						return value.type === 'day'
					})
					this.list[dayIdx].list = this.getDayList()
					let activeIdx = this.list[dayIdx].list.findIndex((value) => {
						return value.active
					})
					let el = this.$refs["day"][0]
					el.setAttribute("data-top", -activeIdx * 34)
					// 去除重设时动画
					this.trans = false
					el.children[0].style.webkitTransform = `translate3d(0, ${-activeIdx * 34}px, 0)`
					el.children[0].style.transform = `translate3d(0, ${-activeIdx * 34}px, 0)`
					let timer = setTimeout(() => {
						this.trans = true
						clearTimeout(timer)
					}, 20)
				}
			},
			// 输出结果
			getResult() {
				let result = this.format.substr(0)
				this.list.forEach((_) => {
					_.list.forEach((__) => {
						if (__.active) {
							result = result.replace(_.reg, __.text)
						}
					})
				})
				return result
			},
		},
		watch: {
			show(val) {
				this.$emit('input', val);

				//判断是否显示，开启关闭锁定屏幕滑动事件
				if (val) {
					this.init()
					Screen.lock()
				} else {
					this.destroyEvents()
					Screen.unlock()
				}
			},
			value(val) {
				this.show = val;
			}
		},
		computed: {},
		components: {
			JrvmPopup
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/date-picker";
</style>