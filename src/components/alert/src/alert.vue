<template>
  <div class="artm-alert">
    <transition :name="maskTrans">
      <artm-mask :unclickable="unclickable" v-show="show" @on-click="onClick"></artm-mask>
    </transition>
    <transition :name="trans">
      <div class="artm-alert-cont" v-show="show">
        <div class="artm-alert-header">
          <h4 v-text="title"></h4>
        </div>
        <div class="artm-alert-body">
          <p v-text="content"></p>
        </div>
        <div class="artm-alert-footer">
          <a href="javascript:;" v-text="btnText" @click="onClick"></a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmMask from '../../mask/index'

	export default {
		name: 'artm-alert',
		props: {
			value: Boolean,
			// alert 部分
			trans: {
				type: String,
        default: 'alert-scale-in'
      },
			title: String,
			content: String,
			btnText: {
				type: String,
        default: '我知道了'
      },
			// mask 部分
			maskTrans: {
				type: String,
				default: 'alert-fade'
			},
			unclickable: {
				type: Boolean,
        default: false
      },
      // 插件调用回调
			fn: Function
		},
    data () {
			return {
				show: this.value
      }
    },
		methods: {
			onClick () {
				this.show = false
        this.$emit('on-click')
        this.fn && this.fn()
      }
		},
		watch: {
			show (val) {
				this.$emit('input', val);
				//判断是否显示，开启关闭锁定屏幕滑动事件
				if(val) {
					Screen.lock();
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
  @import "../../../styles/components/alert";
</style>