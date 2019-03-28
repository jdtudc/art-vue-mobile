<template>
  <div class="artm-tabs">
    <slot></slot>
    <div class="artm-tab-bar" :style="barStyle">
      <div class="artm-tab-inner-bar" :style="innerBarStyle"></div>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'artm-tabs',
		props: {
			animate: {
				type: Boolean,
				default: true
			},
			active: {
				type: Number,
				default: 0
			},
			barColor: String,
			barHeight: String,
			barShort: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				renderData: []
			}
		},
		computed: {
			barStyle() {
				let x = this.active * 100;
				let len = this.renderData.length;
				return {
					width: len > 0 ? (100 / len).toFixed(4) + '%' : '0',
					height: this.barHeight ? this.barHeight : '2px',
					transform: 'translate3d(' + x + '%, 0, 0)',
					transition: this.animate ? 'transform 0.3s ease-out' : 'none',
				}
			},
			innerBarStyle() {
				return {
					width: this.barShort ? '60%' : '100%',
					backgroundColor: this.barColor ? this.barColor : '#359df6'
				}
			}
		},
		methods: {
			handlerClick(index, event) {
				this.$emit('tab-change', index, event)
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/tabs";
</style>