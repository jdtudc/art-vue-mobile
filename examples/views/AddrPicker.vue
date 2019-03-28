<template>
  <div class="artm-page-addr-picker">
    <artm-list title="默认用法">
      <artm-list-item title="选择收货地址" arrow @on-click="onClick" :value="newAddress"></artm-list-item>
    </artm-list>
    <artm-list title="自定义用法">
      <artm-list-item class="flex-middle" title="自定义标题，地址默认话术，不显示关闭，默认有值" arrow @on-click="onClick2" :value="modifyAddress"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-addr-picker v-model="show" :chosen="addrPicker.chosen" :links="addrPicker.links" :formatParam="addrPicker.formatParam" :formatResult="addrPicker.formatResult" @on-choose="choose" @on-cancel="close"></artm-addr-picker>
    </div>
    <div v-transferdom>
      <artm-addr-picker v-model="show2" :title="addrPicker2.title" :selectTitle="addrPicker2.selectTitle" :showClose="addrPicker2.showClose" :chosen="addrPicker2.chosen" :links="addrPicker2.links" :formatParam="addrPicker2.formatParam" :formatResult="addrPicker2.formatResult" @on-choose="choose2" @on-cancel="close"></artm-addr-picker>
    </div>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				show2: false,
				addrPicker: {
					chosen: [],
					links: ['./static/data/a.json','./static/data/b.json','./static/data/c.json','./static/data/d.json'],
          formatParam: function (id, index) {
            return {pid: id}
					},
          // 需要格式化成 [{id: xxx, value: xxx}] 的格式
          formatResult: function (res, index, id) {
            let list = res.list
            let resultList = []
            list.forEach((_) => {
            	resultList.push({id: _.aid, value: _.name})
            })
            return resultList
					}
        },
				addrPicker2: {
					title: '弹窗标题',
          selectTitle: 'please choose',
          showClose: false,
					chosen: [{id: '1', value: '北京'}, {id: '10', value: '海淀区'}, {id: '100',value: '马驹桥镇'}, {id: '1000',value: '六环外'}],
					links: ['./static/data/a.json','./static/data/b.json','./static/data/c.json','./static/data/d.json'],
					formatParam: function (id, index) {
						return {pid: id}
					},
					// 需要格式化成 [{id: xxx, value: xxx}] 的格式
					formatResult: function (res, index, id) {
						let list = res.list
						let resultList = []
						list.forEach((_) => {
							resultList.push({id: _.aid, value: _.name})
						})
						return resultList
					}
				}
			}
		},
		components: {},
		methods: {
			onClick () {
				this.show = true
			},
			onClick2 () {
				this.show2 = true
			},
      close () {
				console.log("收起")
      },
			choose (resultList) {
				let chosen = []
        resultList.forEach((_) => {
					chosen.push({id: _.id, value: _.value})
        })
				this.addrPicker.chosen = chosen
      },
			choose2 (resultList) {
				let chosen = []
				resultList.forEach((_) => {
					chosen.push({id: _.id, value: _.value})
				})
				this.addrPicker2.chosen = chosen
			},
		},
    computed: {
			newAddress () {
				if (this.addrPicker.chosen && this.addrPicker.chosen.length > 0) {
					return this.addrPicker.chosen.map((_) => {
						return _.value
					}).join("")
        } else {
					return '请选择收货地址'
        }
      },
			modifyAddress () {
				if (this.addrPicker2.chosen && this.addrPicker2.chosen.length > 0) {
					return this.addrPicker2.chosen.map((_) => {
						return _.value
					}).join("")
				} else {
					return '请选择收货地址'
				}
			},
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-addr-picker {
  }
</style>
