<template>
  <div class="artm-list">
    <div class="artm-list-title" v-if="title" v-text="title"></div>
    <div class="artm-list-cont">
      <slot></slot>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'artm-list',
		props: {
			title: String
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/list";
</style>