<template>
  <div class="artm-page-slider">
    <artm-list title="基本用法">
      <artm-form-item>
        <artm-slider></artm-slider>
      </artm-form-item>
      <artm-form-item>
        <artm-slider info :value="40"></artm-slider>
      </artm-form-item>
    </artm-list>
    <artm-list title="自定义上下限">
      <artm-form-item>
        <artm-slider info :min="50" :max="200" :value="slider.value" @on-change="changeSlider"></artm-slider>
      </artm-form-item>
      <artm-form-item>
        <artm-input label="当前值" :value="slider.value" @input="handleInput"></artm-input>
      </artm-form-item>
    </artm-list>
    <artm-list title="禁止使用">
      <artm-form-item>
        <artm-slider disabled :value="50"></artm-slider>
      </artm-form-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
        slider: {
        	value: 100,
        }
			}
		},
    methods: {
			changeSlider (per, val) {
				this.slider.value = val
      },
			handleInput (val) {
				this.slider.value = parseInt(val) || 0
      }
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-slider {

  }
</style>
