<template>
  <div class="artm-tab" :class="[custom ? custom : 'default', {'artm-tab_disabled': item.disabled || disabled, 'selected': selected}]" @click="onClick($event)">
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'artm-tab',
		props: {
			custom: String,    // 是否自定义样式
			item: {
				type: Object,
        default: () => {
					return { disabled: false}
        }
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				index: -1
			}
		},
		computed: {
			selected() {
				return (this.$parent.active == this.index)
			}
		},
		created() {
			this.$parent.renderData.push({})
		},
		mounted() {
			let children = this.$parent.$children;
			for (let i = 0; i < children.length; i++) {
				if (children[i].$el === this.$el) {
					this.index = i;
					break
				}
			}
		},
		methods: {
			onClick: function (event) {
				if(this.item && this.item.disabled) return;
        if(this.disabled) return;
				this.$parent.handlerClick(this.index, event)
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/tab";
</style>