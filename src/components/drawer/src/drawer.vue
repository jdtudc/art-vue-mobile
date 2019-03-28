<template>
  <div class="artm-drawer" :class="[open && 'artm-drawer_open']">
    <div class="artm-drawer-sidebar" ref="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="artm-drawer-cont" :style="style">
      <slot></slot>
    </div>
    <transition :name="maskTrans">
      <div class="artm-drawer-mask" v-if="mask && show"></div>
    </transition>
  </div>
</template>
<script>
	export default {
		name: 'artm-drawer',
		props: {
			open: {
				type: Boolean,
        default: false
      },
      inner: {
				type: Boolean,
        default: false
      },
			mask: {
				type: Boolean,
        default: true
      },
			maskTrans: {
				type: String,
        default: 'drawer-fade'
      }
		},
    data () {
			return {
				show: false,
        wid: 0,
      }
    },
    mounted () {
			this.wid = this.$refs.sidebar.offsetWidth
    },
		methods: {},
		computed: {
      style () {
      	if (this.inner && this.show) {
          return {'padding-left': `${this.wid}px`}
        } else {
      		return {}
        }
      }
		},
    watch: {
			open (val) {
				this.show = val
			}
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/drawer";
</style>