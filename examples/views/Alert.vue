<template>
  <div class="artm-page-alert">
    <artm-list title="用法">
      <artm-list-item title="默认用法" arrow @on-click="showAlert"></artm-list-item>
      <artm-list-item title="插件用法" arrow @on-click="showAlertPlugin"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-alert v-model="show1" title="Alert 标题" content="Alert 内容"></artm-alert>
    </div>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
  import AlertPlugin from '../../src/components/alert/alert'
	export default {
		data() {
			return {
				show1: false
			}
		},
    methods: {
			showAlert () {
				this.show1 = !this.show1
			},
			showAlertPlugin () {
				AlertPlugin.show({
          title: '插件标题',
          content: '插件内容',
          btnText: '插件按钮文案',

        }, () => {
					console.log("点击的插件按钮或遮罩")
				})
      },
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-alert {
  }
</style>
