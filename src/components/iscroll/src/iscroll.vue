<template>
  <div class="artm-iscroll" ref="iscroll">
    <div class="artm-iscroll-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import '../../../lib/iscroll'
	export default {
		name: 'artm-iscroll',
		props: {
			options: {
				type: Object,
        default: () => {
        	return {}
        }
			}
		},
    data () {
			return {
				// 滚动对象
				scroll: null,
        config: {
					mouseWheel: true,
          probeType: 3,
          click: true
				}
      }
    },
    created () {
			if (!window.IScroll) {
				console.error("引入IScroll对象失败")
      }
    },
    mounted () {
			if (this.scroll) {
				this.scroll.refresh()
      } else {
				this.scroll = new window.IScroll(this.$refs.iscroll, Object.assign(this.config, this.config))
        this.registEvents()
      }
    },
    methods: {
			registEvents () {
				const events = ['beforeScrollStart', 'scrollCancel', 'scrollStart', 'scroll', 'scrollEnd', 'flick', 'zoomStart', 'zoomEnd']
        events.forEach((_) => {
					this.scroll.on(_, () => {
						this.$emit(_, this.scroll)
          })
        })
      }
    },
    beforeDestroyed () {
			this.scroll && this.scroll.destroy()
      this.scroll = null
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/iscroll";
</style>