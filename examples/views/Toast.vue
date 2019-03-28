<template>
  <div class="artm-page-toast">
    <artm-list title="位置">
      <artm-list-item title="Top" @on-click="onClick('toast1')" arrow></artm-list-item>
      <artm-list-item title="Middle" @on-click="onClick('toast2')" arrow></artm-list-item>
      <artm-list-item title="Bottom" @on-click="onClick('toast3')" arrow></artm-list-item>
    </artm-list>
    <artm-toast content="自上而下 Toast" v-model="showToast1" pos="top"></artm-toast>
    <artm-toast content="居中渐显 Toast" v-model="showToast2" pos="middle"></artm-toast>
    <artm-toast content="自下而上 Toast" v-model="showToast3" pos="bottom"></artm-toast>

    <artm-list title="图标">
      <artm-list-item title="默认图标" @on-click="onClick('toast4')" arrow></artm-list-item>
      <artm-list-item title="自定义图标内容" @on-click="onClick('toast5')" arrow></artm-list-item>
    </artm-list>
    <artm-toast content="提示内容" type="icon" v-model="showToast4"></artm-toast>
    <artm-toast content="提示内容" type="icon" v-model="showToast5">
      <span slot="icon" style=" display: block; width: 20px; height: 20px; background-color: #cccccc; margin: 0 auto;"></span>
    </artm-toast>

    <artm-list title="特殊">
      <artm-list-item title="长内容" @on-click="onClick('toast6')" arrow></artm-list-item>
      <artm-list-item title="自定义隐藏事件" @on-click="onClick('toast7')" arrow></artm-list-item>
    </artm-list>
    <artm-toast content="内容特别特别特别长~~~~" v-model="showToast6" type="longText"></artm-toast>
    <artm-toast content="正在处理中..." v-model="showToast7" @on-hide="onHide" :autoClose="false"></artm-toast>
    <artm-toast content="处理完成！" v-model="showToast8"></artm-toast>

    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
    data () {
    	return {
				showToast1: false,
				showToast2: false,
				showToast3: false,
				showToast4: false,
				showToast5: false,
				showToast6: false,
				showToast7: false,
				showToast8: false,
				content: "",
      }
    },
		components: {},
		methods: {
			onClick (type) {
				switch (type) {
					case 'toast1':
						this.showToast1 = !this.showToast1;
						break;
					case 'toast2':
						this.showToast2 = !this.showToast2;
						break;
					case 'toast3':
						this.showToast3 = !this.showToast3;
						break;
					case 'toast4':
						this.showToast4 = !this.showToast4;
						break;
					case 'toast5':
						this.showToast5 = !this.showToast5;
						break;
					case 'toast6':
						this.showToast6 = !this.showToast6;
						break;
					case 'toast7':
						this.showToast7 = !this.showToast7;
						break;
					default:
						break;
				}
			},
			onHide () {
				this.showToast7 = false;
				this.showToast8 = true;
      }
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-toast { min-height: 1500px;
  }
</style>
