<template>
  <div class="artm-page-iscroll">
    <artm-iscroll :options="options" @scrollEnd="scrollEnd">
      <artm-list title="配置说明">
        <artm-list-item :title="item.title" :value="item.value" :arrow="item.arrow" v-for="(item, index) in list" :key="index" @on-click="onClick"></artm-list-item>
      </artm-list>
    </artm-iscroll>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				list: new Array(20).fill(0).map((_, idx) => {
					return {
						title: `No.${idx+1}`,
            value: idx === 0 ? '查看 options 说明' : '',
						arrow: idx === 0 ? true : false
          }
        }),
				options: {
					mouseWheel: true,
					probeType: 3,
					click: true
				}
      }
    },
    methods: {
      scrollEnd (scroll) {
				if (scroll.y <= scroll.maxScrollY) {  // pullUp
          alert("pullUp")
				} else if (scroll.y >= 0) { // pullDown
					alert("pullDown")
				} else {

        }
      },
			onClick: function () {
				window.location.href = 'https://github.com/cubiq/iscroll'
			}
    }
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-iscroll { position: relative; height: 600px;}
</style>
