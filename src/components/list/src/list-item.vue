<template>
  <div class="artm-list-item" :class="[arrow && 'artm-list-item-link']" @click="onClick">
    <div class="artm-list-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="artm-list-item-cont">
      <p class="title" v-text="title"></p>
      <slot name="desc">
        <p v-if="desc" class="desc" v-text="desc"></p>
      </slot>
    </div>
    <div class="artm-list-item-after">
      <slot name="value"><p v-if="value" v-text="value"></p></slot>
      <i class="arrow"></i>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'artm-list-item',
		props: {
			arrow: {
				type: Boolean,
				default: false
			},
			title: String,
			value: [String, Number, Array],
			desc: String
		},
		methods: {
			onClick() {
				this.arrow && this.$emit("on-click")
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/list-item";
</style>