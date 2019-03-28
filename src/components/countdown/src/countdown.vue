<template>
  <div class="artm-countdown">
    <slot>{{text}}</slot>
  </div>
</template>
<script>
	export default {
		name: 'artm-countdown',
		props: {
      // 自动开始
      start: {
      	type: Boolean,
        default: true
      },
      // 倒计时总长
      total: {
      	type: Number,
        require: true,
      },
      // 显示格式
      format: {
      	type: String,
        default: 'ss'
      },
		},
    data () {
			return {
				remain: null,
        timer: null,
        times: 0, // 次数
				interval: 1000
      }
    },
    created () {
			this.remain = this.total * this.interval
			if (this.start) {
				this.init()
      }
    },
    beforeDestroy () {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
    },
		methods: {
			init () {
        this.timer = setInterval(() => {
        	this.tick ()
        }, this.interval)
      },
      tick () {
				if (this.remain > 0) {
					this.remain -= this.interval
				} else {
					this.stop()
					this.times += 1
					this.$emit('on-finish', this.times)
				}
      },
      stop () {
				clearInterval(this.timer)
				this.timer = null
        this.$emit('on-stop')
			},
    },
    watch: {
			start (val, oldVal) {
				if (val === true && oldVal === false) {
					if (this.remain > 0) {
						this.init()
          } else {
						this.remain = this.total * this.interval
						this.init()
					}
        }
        if (val === false && oldVal === true) {
					this.stop()
        }
      },
			remain (val, oldVal) {
				if (oldVal) {
					if (val > 0) {
						this.$emit("on-change", Math.round(val / 1000))
					} else {
						this.stop()
						this.times += 1
						this.$emit('on-finish', this.times)
					}
        }
      },
    },
		computed: {
      text () {
      	if (this.remain > 0) {
      		let time = this.remain
      		const hour = Math.floor(time / (1000 * 60 * 60))
          time -= hour * 1000 * 60 * 60
          const minute = Math.floor(time / (1000 * 60))
          time -= minute * 1000 * 60
          let second = Math.floor(time / 1000)
          time -= second * 1000
          if (time > 0) {
      			second += 1
          }
          if (this.format === 'ss') { // 只有秒
      			return second
          } else {
						return this.format.replace(/HH|mm|ss/g, function (_) {
							switch (_) {
								case 'HH':
									return hour < 10 ? '0' + hour : hour
                  break
								case 'mm':
									return minute < 10 ? '0' + minute : minute
									break
								case 'ss':
									return second < 10 ? '0' + second : second
									break
                default:
                	break
							}
						})
          }
        } else {
      		return '倒计时结束'
        }
      },
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/countdown";
</style>