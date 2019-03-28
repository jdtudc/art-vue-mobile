<template>
  <div class="artm-slider" :class="[disabled && 'artm-slider_disabled']">
    <span class="artm-slider-info artm-slider-min" v-if="info" v-text="min"></span>
    <div class="artm-slider-inner" ref="inner">
      <div class="artm-slider-track" :style="{width: `${percent}%`}"></div>
      <div class="artm-slider-handler" ref="slider" :style="{left: `${percent}%`}"></div>
    </div>
    <span class="artm-slider-info artm-slider-max" v-if="info" v-text="max"></span>
  </div>
</template>
<script>
	export default {
		name: 'artm-slider',
		props: {
			// 禁止切换
      disabled: {
      	type: Boolean,
        default: false
      },
			// 显示文字信息
      info: {
      	type: Boolean,
        default: false
      },
      // 最小值
      min: {
      	type: Number,
        default: 0
      },
			// 最大值
			max: {
				type: Number,
				default: 100
			},
			// 初始值
      value: {
      	type: Number,
        default: 0
      }
		},
    data () {
			return {
				percent: 0,
        startLeft: 0,
        startX: 0,
      }
    },
    created () {
      this.init()
    },
		mounted () {
			if (this.disabled) {
				return false
      }
			this.$refs.slider.addEventListener("touchstart", this.handleTouchStart)
			this.$refs.slider.addEventListener("touchmove", this.handleTouchMove)
		},
    methods: {
			init () {
				if (!(this.value >= this.min && this.value <= this.max)) {
					console.error(`初始值应该在${this.min} - ${this.max}之间`)
				} else {
					let per = parseInt(100 * (this.value - this.min) / (this.max - this.min))
					per = per < 0 ? 0 : per > 100 ? 100 : per
					this.percent = per
        }
      },
			handleTouchMove (e) {
				const totalLen = this.$refs.inner.offsetWidth
				let movePer = parseInt(100 * (e.changedTouches[0].clientX - this.startX) / totalLen)
				let dis = this.startLeft + movePer
				dis = dis < 0 ? 0 : dis > 100 ? 100 : dis

				this.percent = dis
				this.$emit('on-change', this.percent, this.min + parseInt((this.max - this.min) * this.percent / 100))
				e.preventDefault()
      },
			handleTouchStart (e) {
				this.startLeft = parseInt(this.$refs.slider.style.left)
				this.startX = e.changedTouches[0].clientX
      },
    },
    beforeDestroy () {
			this.$refs.slider.removeEventListener("touchstart", this.handleTouchStart)
			this.$refs.slider.removeEventListener("touchmove", this.handleTouchMove)
		},
		watch: {
			value () {
				this.init()
      }
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/slider";
</style>