<template>
  <div class="artm-toast" v-show="show">
    <artm-mask transparent v-if="mask && show"></artm-mask>
    <transition :name="curTrans">
      <div class="artm-toast-wrapper" :class="['artm-toast_' + pos, {'artm-toast_longText': type === 'longText'}]" v-show="show">
        <div class="artm-toast-icon" v-if="type !== 'text' && type !== 'longText'">
          <slot name="icon">
            <i class="artm-toast-icon_default"></i>
          </slot>
        </div>
        <slot name="content">
          <p class="artm-toast-cont" v-text="content"></p>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmMask from '../../mask/index'
	export default {
		name: 'artm-toast',
		props: {
			value: Boolean,
			//  是否需要遮罩
			mask: {
				type: Boolean,
        default: false
      },
			trans: {
				type: String,
      },
      content: String,
      type: {
				type: String,
        default: 'text'
      },
      pos: {
				type: String,
        default: 'middle'
      },
      time: {
				type: Number,
        default: 2
      },
      autoClose: {
				type: Boolean,
        default: true
      }
		},
    data () {
			return {
				show: this.value,
        timer: null,
      }
    },
    computed: {
			curTrans () {
				if(this.trans) {
					return this.trans;
        }
        if(this.pos === 'top') {
          return 'toast-top'
        }
        if(this.pos === 'middle') {
          return 'toast-middle'
        }
        if(this.pos === 'bottom') {
          return 'toast-bottom'
        }
      }
    },
		methods: {},
    watch: {
			show (val) {
				//判断是否显示，开启关闭锁定屏幕滑动事件
				if(val) {
					Screen.lock();
					this.$emit('input', true);
					this.$emit('on-show');

					this.timer = setTimeout(() => {
						if(this.autoClose) {
							this.show = false;
							this.$emit('input', false);
            }
						this.$emit('on-hide');
						clearTimeout(this.timer)
          }, this.time * 1000)
        }else{
					Screen.unlock();
				}
      },
			value (val) {
				this.show = val;
      }
    },
    components: {
			JrvmMask
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/toast";
</style>