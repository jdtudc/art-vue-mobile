<template>
  <div class="artm-page-loadmore">
    <div class="artm-page-loadmore-cont">
      <div class="artm-page-spacing"></div>
      <artm-loadmore status="loading" tips="加载中"></artm-loadmore>
      <div class="artm-page-spacing"></div>
      <artm-loadmore status="none" tips="就这么多啦"></artm-loadmore>
      <div class="artm-page-spacing"></div>
    </div>

  </div>
</template>

<script>
	export default {
    data () {
    	return {
      }
    },
		components: {},
		methods: {}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-loadmore {
    &-cont { margin: 0 15px;
    }
  }
</style>
