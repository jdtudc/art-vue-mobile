<template>
  <transition name="loading-bar-fade">
    <div class="artm-loading-bar" :class="[fixed && 'artm-loading-bar_fixed']" :style="barStyle" v-show="show">
      <div class="artm-loading-bar-inner" :style="{'width': innerWidth, 'background-color': [status == 'success' && successBg, status == 'fail' && failBg,],}"
           :class="{'artm-loading-bar-inner_success': status == 'success', 'artm-loading-bar-inner_fail': status == 'fail'}"></div>
    </div>
  </transition>
</template>
<script>
	export default {
		name: "artmLoadingBar",
		data() {
			return {
				percent: 0,
				status: 'success',
				show: false,
				barBg: 'transparent',
				successBg: null,
				failBg: null,
				fixed: true,
			}
		},
		computed: {
			barStyle() {
				return {
					backgroundColor: `${this.barBg}`,
				}
			},
			innerWidth() {
				return this.percent + '%';
			},
		},
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_loading-bar.scss';
</style>