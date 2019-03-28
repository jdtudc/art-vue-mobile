<template>
  <div class="artm-page-radio">
    <artm-list title="一般使用">
      <artm-form-item v-for="radio in radioData1" :key="radio.value" @click.native="!radio.disabled && clickRadio(radio)">
        <artm-radio :value="radio.value" :desc="radio.desc" :checked="radio.checked" :disabled="radio.disabled"></artm-radio>
      </artm-form-item>
    </artm-list>
    <artm-list title="禁用">
      <artm-form-item v-for="radio in radioData2" :key="radio.value">
        <artm-radio :value="radio.value" :desc="radio.desc" :checked="radio.checked" :disabled="radio.disabled"></artm-radio>
      </artm-form-item>
    </artm-list>
    <artm-list title="反向">
      <artm-form-item v-for="radio in radioData2" :key="radio.value">
        <artm-radio :value="radio.value" :desc="radio.desc" :checked="radio.checked" :disabled="radio.disabled" :reverse="true"></artm-radio>
      </artm-form-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				radioData1: [
					{id: "1", value: "男", checked: true, disabled: false},
					{id: "2", value: "女", checked: false, disabled: false},
					{id: "3", value: "其他", desc: "补充描述", checked: false, disabled: false},
				],
				radioData2: [
					{id: "1", value: "男", checked: true, disabled: false},
					{id: "2", value: "女", checked: false, disabled: false},
					{id: "3", value: "其他", desc: "补充描述", checked: false, disabled: true},
				]
			}
		},
		methods: {
			clickRadio: function (radio) {
				console.log(JSON.stringify(radio));
				this.radioData1.forEach((_, index) => {
					_.checked = _.id === radio.id ? true : false;
				})
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  .artm-page-radio {
  }
</style>
