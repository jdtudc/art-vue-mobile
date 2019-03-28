<template>
  <div class="artm-page-actionsheet">
    <artm-list title="基本用法">
      <artm-list-item title="默认样式" arrow @on-click="toggle(1)"></artm-list-item>
      <artm-list-item title="带取消按钮" arrow @on-click="toggle(2)"></artm-list-item>
      <artm-list-item title="带标题和提示" arrow @on-click="toggle(3)"></artm-list-item>
    </artm-list>
    <artm-list title="自定义用法">
      <artm-list-item title="遮罩不可点击" arrow @on-click="toggle(4)"></artm-list-item>
      <artm-list-item title="自定义取消按钮" arrow @on-click="toggle(5)"></artm-list-item>
      <artm-list-item title="自定义标题" arrow @on-click="toggle(6)"></artm-list-item>
      <artm-list-item title="不带动画效果" arrow @on-click="toggle(7)"></artm-list-item>
      <artm-list-item title="点击菜单不自动收起" arrow @on-click="toggle(8)"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-actionsheet v-model="show1" :menus="menus"></artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show2" showCancel :menus="menus"></artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show3" showTitle showCancel title="标题" tips="我是提示" :menus="menus"></artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show4" unclickable :menus="menus"></artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show5" showCancel :menus="menus">
        <p slot="cancel" style="color: red">自定义取消</p>
      </artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show6" showTitle showCancel :menus="menus" @on-click-menu="toggle(6)" @on-click-cancel="toggle(6)">
        <p slot="title" style="color:blue">自定义标题</p>
      </artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show7" actionsheetTrans="none" maskTrans="none" :menus="menus" @on-click-menu="toggle(7)" @on-click-cancel="toggle(7)"></artm-actionsheet>
    </div>
    <div v-transferdom>
      <artm-actionsheet v-model="show8" :menus="menus" :autoClose="false" @on-click-menu="clickMenu" @on-click-cancel="toggle(8)"></artm-actionsheet>
    </div>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				show7: false,
				show8: false,
				menus: [{
					value: '按钮一'
				}, {
					value: '按钮二'
				}, {
					value: '不可点按钮',
					disabled: true
				}]
			}
		},
		components: {},
		methods: {
			clickMenu (menu) {
        console.log(menu)
      },
			toggle(type) {
				switch (type) {
					case 1:
						this.show1 = !this.show1
						break
					case 2:
						this.show2 = !this.show2
						break
					case 3:
						this.show3 = !this.show3
						break
					case 4:
						this.show4 = !this.show4
						break
					case 5:
						this.show5 = !this.show5
						break
					case 6:
						this.show6 = !this.show6
						break
					case 7:
						this.show7 = !this.show7
						break
					case 8:
						this.show8 = !this.show8
						break
					default:
						break
				}

			},
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-actionsheet {
  }
</style>
