<template>
  <div class="artm-page-steps">
    <div class="artm-page-steps-cont">
      <div class="artm-page-spacing"></div>
      <artm-steps :data="stepsData"></artm-steps>
      <div class="artm-page-spacing"></div>
      <artm-steps :data="stepsData2"></artm-steps>
      <div class="artm-page-spacing"></div>
      <div class="artm-page-spacing"></div>
      <artm-steps direction="vertical" :data="stepsData"></artm-steps>
      <div class="artm-page-spacing"></div>
      <artm-steps direction="vertical" :data="stepsData2"></artm-steps>
      <div class="artm-page-spacing"></div>
    </div>

  </div>
</template>

<script>
	export default {
		data() {
			return {
				stepsData: [
					{id: "0001", title: "已完成", desc: "", finish: true},
					{id: "0002", title: "进行中", desc: "", active: true},
					{id: "0003", title: "待进行", desc: ""},
				],
				stepsData2: [
					{id: "0001", title: "已完成", desc: "我是描述", finish: true},
					{id: "0002", title: "进行中", desc: "我是描述", active: true},
					{id: "0003", title: "待进行", desc: "我是描述"},
				],
			}
		},
		components: {},
		methods: {}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-steps {
    &-cont {
      margin: 0 15px;
      .artm-steps_vertical {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
</style>
