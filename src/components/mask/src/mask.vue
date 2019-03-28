<template>
  <div class="artm-mask-box">
    <div class="artm-mask" :class="[transparent && 'artm-mask_transparent']" @click="onClick">
      <slot></slot>
    </div>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'

	export default {
		name: 'artm-mask',
		props: {
			unclickable: {
				type: Boolean,
				default: false
			},
			transparent: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick(event) {
				!this.unclickable && this.$emit("on-click", event)
			}
		},
		created() {
//			Screen.lock();
		},
		beforeDestroy() {
//			Screen.unlock();
		},
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/mask";
</style>