<template>
  <div class="artm-page-checkbox">
    <artm-list title="一般使用">
      <artm-form-item v-for="checkbox in checkboxData1" :key="checkbox.value" @click.native="!checkbox.disabled && clickCheckbox(checkbox)">
        <artm-checkbox :value="checkbox.value" :desc="checkbox.desc" :checked="checkbox.checked" :disabled="checkbox.disabled"></artm-checkbox>
      </artm-form-item>
    </artm-list>
    <artm-list title="选中结果">
      <artm-list-item title="选中的项" :value="checkData1"></artm-list-item>
    </artm-list>
    <artm-list title="禁用">
      <artm-form-item v-for="checkbox in checkboxData2" :key="checkbox.value" @click.native="!checkbox.disabled && clickCheckbox(checkbox)">
        <artm-checkbox :value="checkbox.value" :desc="checkbox.desc" :checked="checkbox.checked" :disabled="checkbox.disabled" circle></artm-checkbox>
      </artm-form-item>
    </artm-list>
    <artm-list title="选中结果">
      <artm-list-item title="选中的项" :value="checkData2"></artm-list-item>
    </artm-list>
    <artm-list title="反向">
      <artm-form-item v-for="checkbox in checkboxData3" :key="checkbox.value" @click.native="!checkbox.disabled && clickCheckbox(checkbox)">
        <artm-checkbox :value="checkbox.value" :desc="checkbox.desc" :checked="checkbox.checked" :disabled="checkbox.disabled" :reverse="true"></artm-checkbox>
      </artm-form-item>
    </artm-list>
    <artm-list title="自定义内容">
      <artm-form-item v-for="checkbox in checkboxData4" :key="checkbox.value" @click.native="!checkbox.disabled && clickCheckbox(checkbox)">
        <artm-checkbox :checked="checkbox.checked" :disabled="checkbox.disabled" circle>
          <p class="demo-prototype">我已阅读并理解<a href="javascript:;">《服务说明》</a></p>
        </artm-checkbox>
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
				checkboxData1: [
					{id: "1", value: "选项1", checked: false, disabled: false},
					{id: "2", value: "默认选中", checked: true, disabled: false},
					{id: "3", value: "禁用", desc: "我是描述", checked: false, disabled: true},
					{id: "4", value: "已选中禁用", checked: true, disabled: true},
				],
				checkboxData2: [
					{id: "1", value: "选项1", desc: "我是描述", checked: false, disabled: false},
					{id: "2", value: "选项2", checked: false, disabled: false},
					{id: "3", value: "禁用", checked: false, disabled: true},
				],
				checkboxData3: [
					{id: "1", value: "选项1", desc: "我是描述", checked: false, disabled: false},
					{id: "2", value: "选项2", checked: false, disabled: false},
					{id: "3", value: "禁用", checked: false, disabled: true},
				],
				checkboxData4: [
					{id: "1", value: "我已阅读并理解用户协议", checked: false, disabled: false},
				]
			}
		},
		methods: {
			clickCheckbox: function (checkbox) {
				checkbox.checked = !checkbox.checked;
			}
		},
		computed: {
			checkData1() {
				return `[${this.checkboxData1.filter((_, index) => {
					return _.checked
				}).map((_, index) => {
					return _.value
				}).join(",")}]`
			},
			checkData2() {
				return `[${this.checkboxData2.filter((_, index) => {
					return _.checked
				}).map((_, index) => {
					return _.value
				}).join(",")}]`
			},
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-checkbox {
    .demo-prototype {
      a {
        color: #359df6;
      }
    }
  }
</style>
