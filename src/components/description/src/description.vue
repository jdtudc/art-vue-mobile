<template>
  <div class="artm-description">
    <div class="artm-description-cont">
      <div class="artm-description-wrapper">
        <div class="artm-description-title" v-text="title"></div>
        <div class="artm-description-scroll" ref="scroll">
          <ul class="artm-description-list">
            <li class="artm-description-desc" v-for="(item, index) in content" v-text="item"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="artm-description-close" @click="handleClick"></div>
  </div>
</template>
<script>
  import {Screen} from '../../../utils/screen'
  import '../../../lib/iscroll'

	export default {
		name: 'artm-description',
		props: {
			title: {
				type: String,
				require: true
			},
			content: {
				type: Array,
				require: true
			}
		},
    data () {
			return {
				scroll: null,
      }
    },
    mounted () {
			this.scroll = new window.IScroll(this.$refs.scroll, {
				mouseWheel: true,
				probeType: 3,
				click: true
			});
    },
		created() {
			Screen.lock();
		},
		beforeDestroy() {
			this.scroll = null;
			Screen.unlock();
		},
		methods: {
			handleClick() {
        Screen.unlock();
				this.$emit("on-close")
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/description";
</style>