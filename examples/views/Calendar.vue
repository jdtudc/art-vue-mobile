<template>
  <div class="artm-page-calendar">
    <artm-list title="默认用法">
      <artm-list-item title="日期" arrow @on-click="onClick1" :value="chosen1 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="带默认值">
      <artm-list-item title="日期" arrow @on-click="onClick2" :value="chosen2 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="带Header">
      <artm-list-item title="日期" arrow @on-click="onClick3" :value="chosen3 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="选择多个日期">
      <artm-list-item title="日期" arrow @on-click="onClick4" :value="chosen4 ? chosen4 : '请选择'"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-calendar v-model="show1" :chosen="chosen1" @on-choose="chooseDate1"></artm-calendar>
    </div>
    <div v-transferdom>
      <artm-calendar v-model="show2" :chosen="chosen2" @on-choose="chooseDate2"></artm-calendar>
    </div>
    <div v-transferdom>
      <artm-calendar v-model="show3" :chosen="chosen3" showHeader @on-choose="chooseDate3"></artm-calendar>
    </div>
    <div v-transferdom>
      <artm-calendar v-model="show4" :chosen="chosen4" multi @on-choose="chooseDate4"></artm-calendar>
    </div>

    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				chosen1: null,
				chosen2: '2018-11-01',
				chosen3: null,
				chosen4: null,

				hourList: new Array(12).fill().map((_, idx) => { return idx}),
				minuteList: new Array(6).fill().map((_, idx) => { return idx * 10}),
				order: {
					year: 3,
          month: 1,
          day: 2,
          hour: 4,
          minute: 5,
        },
        minYear: 2020,
        maxYear: 2030,
        startDate: '2015-07-11',
        endDate: '2017-05-28',
			}
		},
		components: {},
		methods: {
			onClick1 () {
				this.show1 = true
			},
			onClick2 () {
				this.show2 = true
			},
			onClick3 () {
				this.show3 = true
			},
			onClick4 () {
				this.show4 = true
			},
			chooseDate1 (result) {
				this.chosen1 = result
      },
			chooseDate2 (result) {
				this.chosen2 = result
			},
			chooseDate3 (result) {
				this.chosen3 = result
			},
			chooseDate4 (result) {
				this.chosen4 = result
			}
		},
    computed: {
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-calendar {
  }
</style>
