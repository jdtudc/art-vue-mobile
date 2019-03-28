<template>
  <div class="artm-page-textarea">
    <artm-list title="单行显示">
      <artm-form-item>
        <artm-textarea label="默认用法" placeholder="提示文案"></artm-textarea>
      </artm-form-item>
      <artm-form-item>
        <artm-textarea label="禁用" disabled value="362422"></artm-textarea>
      </artm-form-item>
      <artm-form-item>
        <artm-textarea class="flex-middle" label="垂直居中" placeholder="请填写简介内容（不得超过500个字）" :maxlength="500"></artm-textarea>
      </artm-form-item>
      <artm-form-item>
        <artm-textarea placeholder="没有 label"></artm-textarea>
      </artm-form-item>
    </artm-list>
    <div class="artm-page-textarea">
      <artm-list title="两行显示">
        <artm-form-item>
          <artm-textarea label="姓名" :inline="false" value="张三"></artm-textarea>
        </artm-form-item>
        <artm-form-item>
          <artm-textarea label="身份证" :inline="false" placeholder="请填写身份证"></artm-textarea>
        </artm-form-item>
      </artm-list>
    </div>
    <div class="artm-page-textarea">
      <artm-list title="浮动Label">
        <artm-form-item>
          <artm-textarea label="姓名" float :inline="false" value="张三"></artm-textarea>
        </artm-form-item>
        <artm-form-item>
          <artm-textarea label="身份证" float :inline="false" placeholder="请填写身份证"></artm-textarea>
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
  .artm-page-textarea {

  }
</style>
