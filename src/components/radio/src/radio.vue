<template>
  <div class="artm-radio" :class="[disabled && 'artm-radio_disabled', checked && 'artm-radio_checked', reverse && 'artm-radio_reverse']">
    <i class="artm-radio-icon"></i>
    <div class="artm-radio-cont" v-if="value || desc">
      <p class="artm-radio-value" v-text="value"></p>
      <p v-if="desc" class="artm-radio-desc" v-text="desc"></p>
    </div>
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'artm-radio',
		props: {
			value: {
				type: String,
			},
			desc: {
				type: String
			},
			checked: {
				type: Boolean,
				default: false,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			reverse: {
				type: Boolean,
				default: false,
			},
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/radio";
</style>