<template>
  <div class="artm-page-drawer">
    <artm-list title="点击操作Drawer">
      <artm-list-item title="配置inner可切换方式">
        <artm-switch slot="value" :active="switchActive" @on-change="changeSwitch">
          <div slot="open">开</div>
          <div slot="close">关</div>
        </artm-switch>
      </artm-list-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
    <artm-drawer :style="{height: `${winH}px`}" :inner="true" :open="switchActive">
      <div class="list" slot="sidebar">
        <artm-list>
          <artm-list-item :title="item" v-for="(item, index) in list" :key="index"></artm-list-item>
        </artm-list>
      </div>
      <p class="drawer-cont">Content</p>
    </artm-drawer>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				list: new Array(20).fill(0).map((_, index) => {
					return (index + 1).toString()
        }),
        winH: 0,
				switchActive: false,
			}
		},
    created () {
			this.winH = window.innerHeight
    },
    methods: {
			changeSwitch: function () {
        this.switchActive = !this.switchActive;
			}
    }
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-drawer {
    .list { width: 200px;}
    .drawer-cont { text-align: center; line-height: 1.5; padding: 10px;}
  }
</style>
