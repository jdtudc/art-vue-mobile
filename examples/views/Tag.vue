<template>
  <div class="artm-page-tag">
    <div class="artm-page-tag-cont">
      <div class="artm-page-spacing"></div>
      <artm-tag>标签一</artm-tag>
      <artm-tag level="2">标签二</artm-tag>
      <artm-tag level="3">标签三</artm-tag>
      <artm-tag level="4">标签四</artm-tag>
      <artm-tag level="5">标签五</artm-tag>
      <artm-tag level="6">标签六</artm-tag>
      <div class="artm-page-spacing"></div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-tag {
    &-cont { margin: 0 15px; display: flex; flex-wrap: wrap;
      .artm-tag { margin-right: 10px; margin-bottom: 10px;}
    }
  }
</style>
