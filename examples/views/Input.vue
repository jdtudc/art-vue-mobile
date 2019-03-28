<template>
  <div class="artm-page-input">
    <artm-list title="单行显示">
      <artm-form-item>
        <artm-input label="默认用法" placeholder="提示文案"></artm-input>
      </artm-form-item>
      <artm-form-item>
        <artm-input label="禁用" disabled value="362422"></artm-input>
      </artm-form-item>
      <artm-form-item>
        <artm-input placeholder="没有 label"></artm-input>
      </artm-form-item>
    </artm-list>
    <div class="artm-page-input">
      <artm-list title="两行显示">
        <artm-form-item>
          <artm-input label="姓名" :inline="false" value="张三"></artm-input>
        </artm-form-item>
        <artm-form-item>
          <artm-input label="密码" type="password" :inline="false" placeholder="请填写密码"></artm-input>
        </artm-form-item>
      </artm-list>
    </div>
    <div class="artm-page-input">
      <artm-list title="浮动Label">
        <artm-form-item>
          <artm-input label="姓名" float :inline="false" value="张三"></artm-input>
        </artm-form-item>
        <artm-form-item>
          <artm-input label="密码" type="password" float :inline="false" placeholder="请填写密码"></artm-input>
        </artm-form-item>
      </artm-list>
    </div>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
    methods: {
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-input {

  }
</style>
