<template>
  <div class="artm-checkbox" :class="[disabled && 'artm-checkbox_disabled', checked && 'artm-checkbox_checked', reverse && 'artm-checkbox_reverse']">
    <i class="artm-checkbox-icon" :class="{'artm-checkbox-icon_circle': circle}"></i>
    <div class="artm-checkbox-cont" v-if="value || desc">
      <p class="artm-checkbox-value" v-text="value"></p>
      <p v-if="desc" class="artm-checkbox-desc" v-text="desc"></p>
    </div>
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'artm-checkbox',
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
			circle: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/checkbox";
</style>