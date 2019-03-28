<template>
  <div class="artm-addr-picker">
    <artm-popup v-model="show" :unclickable="unclickable" @on-click-cancel="onClickCancel">
      <div class="artm-addr-picker-cont" v-if="show">
        <div class="artm-addr-picker-header">
          <h3 class="artm-addr-picker-header-title" v-text="title"></h3>
          <i class="artm-addr-picker-header-close" @click="onClickCancel" v-if="showClose"></i>
          <div class="artm-addr-picker-header-addr">
            <span :class="[(curIdx - 1) === index && 'active']" v-for="(result, index) in resultList" :key="index" v-text="result.value" @click="changeView(index)" :ref="(curIdx - 1) === index ? 'lineActive' : ''"></span>
          </div>
          <div class="artm-addr-picker-header-line" :style="lineStyle"></div>
        </div>
        <div class="artm-addr-picker-select-list" :style="style">
          <div class="artm-addr-picker-select-item" v-for="(item, index) in list" :key="index" :ref="`scroll_${index}`">
            <ul>
              <li :class="[addr.active && 'active']" v-for="(addr, idx) in item" :key="idx" :aid="addr.id" v-text="addr.value" @click="chooseAddr(addr, index)"></li>
            </ul>
          </div>
        </div>
        <transition name="addr-picker-fade">
          <div class="artm-addr-picker-loading" v-if="showLoading">
            <div class="artm-addr-picker-loading-mask"></div>
            <div class="artm-addr-picker-loading-box">
              <div class="artm-addr-picker-loading-circle"></div>
            </div>
          </div>
        </transition>
      </div>
    </artm-popup>
  </div>
</template>
<script>
  import '../../../lib/iscroll'
	import {Screen} from '../../../utils/screen'
	import JrvmPopup from '../../popup/index'

	export default {
		name: 'artm-addr-picker',
		props: {
			value: Boolean,
      title: {
				type: String,
        default: '请选择地址'
      },
			selectTitle: {
				type: String,
				default: '请选择'
			},
			showClose: {
				type: Boolean,
        default: true
      },
			unclickable: {
				type: Boolean,
        default: false
      },
      // 请求地址
      links: {
				type: Array,
        require: true
      },
      // 请求类型
			ajaxType: {
				type: String,
				default: 'get'
			},
      // 是否带cookie
			withCredentials: {
				type: Boolean,
        default: false
      },
      // 请求数据类型
      ajaxDataType: {
				type: String,
        default: 'json'
      },
      // 入参格式处理函数
			formatParam: {
				type: Function,
        require: true
      },
			// 出参格式处理函数，需转成 [{id:地址id, value: 地址名称}] 的形式
			formatResult: {
				type: Function,
				require: true
			},

      // 已选中项
			chosen: Array,
		},
    data () {
			return {
				show: this.value,
				// 显示loading
				showLoading: false,
        // 城市列表数组
        list: [],
        // 城市列表滚动对象数组
        scrollList: [],
        // 选中列表
        resultList: [],
        // 当前选中的下标
        curIdx: 0,
        // 线样式
        lineStyle: null,
        // 默认选中数组,
        chooseArr: null,

				CLICK_LOCK: false
      }
    },
		methods: {
			onClickCancel () {
				this.show = false
				this.$emit("on-cancel");
			},
      // 获取线的宽度和位置
      getLineStyle () {
				let line = this.$refs.lineActive[0]
				this.lineStyle = {
					'width': `${line.offsetWidth}px`,
					'transform': `translate3d(${line.offsetLeft}px, 0, 0)`,
					'webkitTransform': `translate3d(${line.offsetLeft}px, 0, 0)`
				}
      },
      // 选中地址
      chooseAddr (addr, index) {
        if (!this.CLICK_LOCK) {
					if (addr.active) {  // 不需要另外查询截取，直接切换即可
						if (this.curIdx ===  this.resultList.length) {
							this.setResult()
						} else {
							this.curIdx += 1
							this.CLICK_LOCK = true
							let timer = setTimeout(() => {
								clearTimeout(timer)
								this.CLICK_LOCK = false
							}, 250)
							this.$nextTick(() => {
								this.getLineStyle()
							})
						}
					} else {
						this.list[index].forEach((_) => {
							_.active = _.id === addr.id ? true : false
						})
						this.resultList = this.resultList.slice(0, index + 1)
						this.chooseArr = []
						this.resultList[index] = {id: addr.id, value: addr.value}
						if (index === this.links.length - 1) {
							this.setResult()
						} else {
							this.getAjaxData(index + 1, addr.id).then((list) => {
								if (list && list.length > 0) {
									this.curIdx += 1
									this.CLICK_LOCK = true
									let timer = setTimeout(() => {
										clearTimeout(timer)
										this.CLICK_LOCK = false
									}, 250)
									this.fillList(index + 1, list)
								} else {
									this.setResult()
								}
							})
						}
					}
        }
      },
      // 切换层级
      changeView (index) {
        if (index !== this.curIdx - 1) {
          this.curIdx = index + 1
          this.$nextTick(() => {
						this.getLineStyle()
          })
				}
      },
      // 填充数据
      fillList (index, data) {
				let list = []
        if (this.chooseArr && this.chooseArr.length > 0 && this.chooseArr[index]) {
					data.forEach((_, idx) => {
						list.push({id: _.id, value: _.value, active: (_.id === this.chooseArr[index].id) ? true : false})
					})
					this.resultList.push({id: this.chooseArr[index].id, value: this.chooseArr[index].value})
				} else {
					data.forEach((_, idx) => {
						list.push({id: _.id, value: _.value})
					})
					this.resultList.push({id: null, value: this.selectTitle})
				}
				this.list[index] = list
				this.$nextTick(() => {
          this.updateScroll(index)
					this.getLineStyle()
				})
      },
      // 更新Scroll对象
      updateScroll (index) {
        if (this.scrollList[index]) {
          this.scrollList[index].refresh()
        } else {
          this.scrollList[index] = new window.IScroll(this.$refs[`scroll_${index}`][0], {mouseWheel: true, probeType: 3, click: true})
        }
      },
      // 输出结果
			setResult () {
        this.show = false
        this.$emit('on-choose', this.resultList)
      },
      // 请求数据
      getAjaxData (index, id) {
				return new Promise((resolve, reject) => {
					let self = this
					this.list[index] = []
					this.showLoading = true
					const url = this.links[index]
					const data = this.formatParam(id, index)
					const dataType = this.ajaxDataType
					const type = this.ajaxType
          let ajaxOpt = {
						url: url,
						data: data,
						dataType: dataType,
						type: type,
						success (res) {
							self.showLoading = false
							let list = self.formatResult(res, index, id)
							resolve(list)
						},
						error (err) {
							self.showLoading = false
							self.$emit("on-error", {error: err, index: index, id: id})
							reject(err)
						},
					}
					if (this.withCredentials) {
						ajaxOpt.xhrFields = {withCredentials: true}
          }
					$.ajax(ajaxOpt)
        })
      },
      // 重置数据
      reset () {
				this.chooseArr = this.chosen
				this.list = this.links.map(() => {
					return []
				})
				this.scrollList = this.links.map(() => {
					return null
				})
        this.resultList = []
        this.curIdx = 0

				if (this.chooseArr && this.chooseArr.length > 0) {
          let promiseAll = [this.getAjaxData(0,0, true) ]
					this.chooseArr.forEach((_, idx) => {
						if (idx !== this.chooseArr.length - 1) {
							promiseAll.push(this.getAjaxData(idx + 1, _.id, true))
						}
					})
          Promise.all(promiseAll).then((result) => {
            result.forEach((list, index) => {
							if (list && list.length > 0) {
								this.curIdx += 1
								this.fillList(index, list)
							}
            })
					})
				} else {
					this.getAjaxData(0,0).then((list) => {
            if (list && list.length > 0) {
              this.curIdx += 1
              this.fillList(0, list)
            } else {
              this.setResult()
            }
          }) // 初始化查好省份数据
				}
      },
		},
		watch: {
			show (val) {
				this.$emit('input', val);

				//判断是否显示，开启关闭锁定屏幕滑动事件
				if(val) {
					this.reset()
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
			style () {
				return {
					'width': `${100 * this.links.length}%`,
					'transform': `translate3d(-${(this.curIdx - 1) * parseFloat(100 / this.links.length)}%, 0, 0)`,
					'webkitTransform': `translate3d(-${(this.curIdx - 1) * parseFloat(100 / this.links.length)}%, 0, 0)`
        }
      },
    },
		components: {
			JrvmPopup
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/addr-picker";
</style>