<template>
  <div class="artm-page-infinite-scroll">
    <div class="artm-page-infinite-scroll-box">
      <artm-loadmore :status="status" :tips="tips"></artm-loadmore>
      <artm-iscroll @scroll="scroll" @scrollEnd="scrollEnd">
        <artm-list>
          <artm-list-item :title="item" v-for="(item, index) in list" :key="index"></artm-list-item>
        </artm-list>
      </artm-iscroll>
    </div>
    <div class="artm-page-spacing"></div>
    <div class="artm-page-infinite-scroll-box">
      <artm-iscroll @scroll="scroll2" @scrollEnd="scrollEnd2">
        <artm-list>
          <artm-list-item :title="item" v-for="(item, index) in list2" :key="index"></artm-list-item>
        </artm-list>
      </artm-iscroll>
      <artm-loadmore :status="status2" :tips="tips2" style="position: absolute; left: 0; bottom: 0; right: 0; z-index: -1;"></artm-loadmore>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				list: new Array(20).fill(0).map((_, idx) => {
					return `上拉刷新第 ${idx + 1} 条数据`
				}).reverse(),
				list2: new Array(20).fill(0).map((_, idx) => {
					return `下拉刷新第 ${idx + 1} 条数据`
				}),
        isPullUp: false,
				status: 'loading',
				tips: '加载中',
				isPullDown: false,
				status2: 'loading',
				tips2: '加载中'
			}
		},
		methods: {
			// 上拉刷新事件监听
			scroll (scroll) {
				if (scroll.y >= 40) {
					this.isPullUp = true
        }
      },
			// 上拉刷新事件监听
			scrollEnd (scroll) {
				if (this.isPullUp) {
					this.isPullUp = false
					if (this.list.length < 100) {
						this.list = new Array(this.list.length + 20).fill(0).map((_, idx) => {
							return `上拉刷新第 ${idx + 1} 条数据`
						}).reverse()
						if (this.list.length >= 100) {
							this.status = 'none'
							this.tips = '就这么多啦'
						}
						this.$nextTick(() => {
							scroll.refresh()
							this.LOCK = false
						})
          }
        }
			},
      // 下拉刷新事件监听
      scroll2 (scroll) {
				if (scroll.y <= scroll.maxScrollY - 40) {
					this.isPullDown = true
				}
      },
			scrollEnd2(scroll) {
				if (this.isPullDown) {
					this.isPullDown = false
          if (this.list2.length < 100) {
						this.list2 = new Array(this.list2.length + 20).fill(0).map((_, idx) => {
							return `下拉刷新第 ${idx + 1} 条数据`
						})
						if (this.list2.length >= 100) {
							this.status2 = 'none'
							this.tips2 = '就这么多啦'
						}
						this.$nextTick(() => {
							scroll.refresh()
						})
          }
        }
			}
		}
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-infinite-scroll-box {
    position: relative;
    height: 300px;
  }
</style>
