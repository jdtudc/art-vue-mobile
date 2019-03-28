<template>
  <div class="artm-popup">
    <transition :name="maskTrans">
      <artm-mask :unclickable="unclickable" v-show="show" @on-click="onClickCancel"></artm-mask>
    </transition>
    <transition :name="trans">
      <div class="artm-popup-cont" v-show="show">
       <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmMask from '../../mask/index'

	export default {
		name: 'artm-popup',
		props: {
			value: Boolean,
			// popup 部分
			trans: {
				type: String,
				default: 'popup'
			},
			// mask 部分
			maskTrans: {
				type: String,
				default: 'popup-fade'
			},
			unclickable: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				show: this.value
			}
		},
		methods: {
			onClickCancel () {
				this.show = false
				this.$emit("on-click-cancel");
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
  @import "../../../styles/components/popup";
</style>