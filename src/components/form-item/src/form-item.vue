<template>
  <div class="artm-form-item">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'artm-form-item'
	}
</script>

<style type="text/scss" lang="scss">
  @import '../../../styles/components/_form-item.scss';
</style>