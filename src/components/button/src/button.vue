<template>
  <div
    :class="['artm-button', disabled && 'artm-button_disabled', 'artm-button_'+ size, 'artm-button_'+type, !border && 'artm-button_nobor']"
    :disabled="disabled" @click="handleClick">
    <img v-if="icon" class="artm-button-icon" :src="icon" alt="">
    <span class="artm-button-text"><slot></slot></span>
  </div>
</template>

<script>
	export default {
		name: 'artm-button',
		props: {
			type: {
				type: String,
				default: 'main'
			},
			size: {type: String, default: 'middle'},
			icon: String,
			disabled: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleClick(event) {
				this.$emit('click', event)
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_button.scss';
</style>
