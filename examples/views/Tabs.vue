<template>
  <div class="artm-page-tabs">
    <artm-list title="常见用法"></artm-list>
    <artm-tabs :active="active" @tab-change="tabChange">
      <artm-tab v-for="(item, index) in items" :key="item.id" :item="item">{{item.text}}</artm-tab>
    </artm-tabs>

    <artm-list title="不带切换动画"></artm-list>
    <artm-tabs :animate="false" :active="active2" @tab-change="tabChange2">
      <artm-tab v-for="(item, index) in items" :key="item.id" :item="item">{{item.text}}</artm-tab>
    </artm-tabs>

    <artm-list title="Short Bar"></artm-list>
    <artm-tabs :active="active3" bar-short @tab-change="tabChange3">
      <artm-tab v-for="(item, index) in items" :key="item.id" :item="item">{{item.text}}</artm-tab>
    </artm-tabs>

    <artm-list title="静态数据且自定义样式"></artm-list>
    <artm-tabs :active="active4" @tab-change="tabChange4">
      <artm-tab><p style="color: red">自定义一</p></artm-tab>
      <artm-tab>自定义二</artm-tab>
      <artm-tab disabled>自定义三</artm-tab>
    </artm-tabs>


    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				active2: 0,
				active3: 0,
				active4: 0,
				items: [
					{
						value: "001",
						text: "导航一",
					},
					{
						value: "002",
						text: "导航二",
					},
					{
						value: "003",
						text: "导航三",
						disabled: true
					}
				],
			}
		},
		methods: {
			tabChange(index, event) {
				this.active = index;
			},
			tabChange2(index, event) {
				this.active2 = index;
			},
			tabChange3(index, event) {
				this.active3 = index;
			},
			tabChange4(index, event) {
				this.active4 = index;
			},
		},
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-tabs {
  }
</style>
