<template>
  <div class="artm-page-date-picker">
    <artm-list title="默认格式：yyyy-MM-dd">
      <artm-list-item title="开始时间" arrow @on-click="onClick1" :value="chosen1 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="带初始值">
      <artm-list-item title="开始时间" arrow @on-click="onClick2" :value="chosen2 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="格式：yyyy年MM月dd日HH时mm分">
      <artm-list-item title="开始时间" arrow @on-click="onClick3" :value="chosen3 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="自定义小时（上午）">
      <artm-list-item title="开始时间" arrow @on-click="onClick4" :value="chosen4 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="自定义分钟（每10分钟）">
      <artm-list-item title="开始时间" arrow @on-click="onClick5" :value="chosen5 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="倒序展示">
      <artm-list-item title="开始时间" arrow @on-click="onClick6" :value="chosen6 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="自定义顺序">
      <artm-list-item title="开始时间" arrow @on-click="onClick7" :value="chosen7 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list title="自定义年份">
      <artm-list-item title="开始时间" arrow @on-click="onClick8" :value="chosen8 || '请选择'"></artm-list-item>
    </artm-list>
    <artm-list :title="`自定义日期范围 ${startDate}至${endDate}`">
      <artm-list-item title="开始时间" arrow @on-click="onClick9" :value="chosen9 || '请选择'"></artm-list-item>
    </artm-list>

    <div v-transferdom>
      <artm-date-picker v-model="show1" :chosen="chosen1" @on-choose="chooseDate1"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show2" :chosen="chosen2" @on-choose="chooseDate2"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show3" format="yyyy年MM月dd日HH时mm分" title="自定义标题" :chosen="chosen3" @on-choose="chooseDate3"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show4" format="yyyy-MM-dd HH:mm" :chosen="chosen4" :hourList="hourList" @on-choose="chooseDate4"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show5" format="yyyy-MM-dd HH:mm" :chosen="chosen5" :minuteList="minuteList" @on-choose="chooseDate5"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show6" :chosen="chosen6" desc @on-choose="chooseDate6"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show7" format="yyyy-MM-dd HH:mm" title="月-日-年-小时-分钟" :chosen="chosen7" :order="order" @on-choose="chooseDate7"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show8" :chosen="chosen8" :minYear="minYear" :maxYear="maxYear" @on-choose="chooseDate8"></artm-date-picker>
    </div>
    <div v-transferdom>
      <artm-date-picker v-model="show9" :chosen="chosen9" :startDate="startDate" :endDate="endDate" @on-choose="chooseDate9"></artm-date-picker>
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
				show5: false,
				show6: false,
				show7: false,
				show8: false,
				show9: false,
				chosen1: null,
				chosen2: '2018-11-01',
				chosen3: null,
				chosen4: null,
				chosen5: null,
				chosen6: null,
				chosen7: null,
				chosen8: null,
				chosen9: null,

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
			onClick5 () {
				this.show5 = true
			},
			onClick6 () {
				this.show6 = true
			},
			onClick7 () {
				this.show7 = true
			},
			onClick8 () {
				this.show8 = true
			},
			onClick9 () {
				this.show9 = true
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
			},
			chooseDate5 (result) {
				this.chosen5 = result
			},
			chooseDate6 (result) {
				this.chosen6 = result
			},
			chooseDate7 (result) {
				this.chosen7 = result
			},
			chooseDate8 (result) {
				this.chosen8 = result
			},
			chooseDate9 (result) {
				this.chosen9 = result
			}
		},
    computed: {
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-date-picker {
  }
</style>
