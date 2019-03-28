<template>
  <div class="artm-modal">
    <transition :name="maskTrans">
      <artm-mask :unclickable="unclickable" v-show="show" @on-click="onClickCancel"></artm-mask>
    </transition>
    <transition :name="trans">
      <div class="artm-modal-cont" v-show="show">
        <div class="artm-modal-header">
          <slot name="header">
            <h4 v-text="title"></h4>
          </slot>
        </div>
        <div class="artm-modal-body">
          <slot>
            <p v-text="content"></p>
          </slot>
        </div>
        <div class="artm-modal-footer">
          <slot name="footer">
            <a class="artm-modal-btn artm-modal-btn_weak bdl" href="javascript:;" @click="onClickCancel">取消</a>
            <a class="artm-modal-btn artm-modal-btn_blue bdl" href="javascript:;" @click="onClickConfirm">确定</a>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmMask from '../../mask/index'

	export default {
		name: 'artm-modal',
		props: {
			value: Boolean,
			// modal 部分
			trans: {
				type: String,
        default: 'modal-scale-in'
      },
			title: String,
			content: String,
			// mask 部分
			maskTrans: {
				type: String,
				default: 'modal-fade'
			},
			unclickable: {
				type: Boolean,
        default: true
      },
		},
    data () {
			return {
				show: this.value
      }
    },
		methods: {
			onClickCancel () {
				this.show = false
        this.$emit('on-click-cancel')
      },
			onClickConfirm () {
				this.$emit('on-click-confirm')
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
  @import "../../../styles/components/modal";
</style>