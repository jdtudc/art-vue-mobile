<template>
  <div class="artm-steps" :class="'artm-steps_'+direction">
    <div class="artm-step" :class="{'artm-step_active': step.active, 'artm-step_finish': step.finish, 'artm-step_flexItem': index !== 0 && index !== data.length - 1}" v-for="(step, index) in data">
      <div class="artm-step-line"></div>
      <div class="artm-step-icon" v-if="step.finish"></div>
      <div class="artm-step-icon" v-else>{{index+1}}</div>
      <div class="artm-step-content">
        <p class="artm-step-title"><b>{{step.title}}</b></p>
        <p class="artm-step-desc" v-if="step.desc">{{step.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'artm-steps',
		props: {
			data: {
				type: Array,
				default: () => { return [];}
			},
			direction: {
				type: String,
				default: 'horizontal'
			}
		},
		methods: {
		},
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/steps";
</style>