<template>
  <div class="artm-loadmore">
    <slot>
      <i class="artm-loadmore-icon" :class="['artm-loadmore-icon_' + status]"></i>
      <p class="artm-loadmore-tips" v-text="tips" v-if="tips"></p>
    </slot>
  </div>
</template>
<script>
	export default {
		name: 'artm-loadmore',
		props: {
			status: {
				type: String,
        default: "loading",
      },
			tips: String
		},
		methods: {}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/loadmore";
</style>