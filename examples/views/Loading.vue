<template>
  <div class="artm-page-loading">
    <artm-list title="常见用法">
      <artm-list-item title="Loading" arrow @on-click="onClick"></artm-list-item>
    </artm-list>
    <artm-loading v-model="showLoading1" type="toast" text="稍等片刻"></artm-loading>
  </div>
</template>

<script>
	export default {
    data () {
    	return {
				showLoading1: false,
      }
    },
		methods: {
			onClick () {
				this.showLoading1 = !this.showLoading1;
				let timer = setTimeout(() => {
					if(this.showLoading1 ) {
						this.showLoading1 = false;
          }
          clearTimeout(timer);
        },2000);
			}
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-loading {
  }
</style>
