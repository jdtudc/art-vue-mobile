<template>
  <div class="artm-switch" :class="{'artm-switch_active': (autoSwitch ? checked : active) , 'artm-switch_disabled': disabled}" @click="toggle">
    <div class="artm-switch-inner">
      <slot name="open" v-if="(autoSwitch?checked:active)"></slot>
      <slot name="close" v-if="!(autoSwitch?checked:active)"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'artmSwitch',
		props: {
			active: {
				type: Boolean,
				default: false
			},
			// 是否自动切换
			autoSwitch: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				checked: false,
			}
		},
		created() {
			this.checked = this.active;
		},
		methods: {
			toggle() {
				if (!this.disabled) {
					this.autoSwitch && ( this.checked = !this.checked);
					this.$emit("on-change", this.checked)
				}
			}
		},
    watch: {
			active (val) {
				this.checked = val
      }
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_switch.scss';
</style>
