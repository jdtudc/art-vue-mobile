<template>
  <div class="artm-actionsheet">
    <transition :name="maskTrans">
      <artm-mask :unclickable="unclickable" v-show="show" @on-click="onClickCancel"></artm-mask>
    </transition>
    <transition :name="trans">
      <div class="artm-actionsheet-cont" v-show="show">
        <div class="artm-actionsheet-title" v-if="title || showTitle">
          <slot name="title">
            <p class="title" v-text="title"></p>
            <p class="tips" v-text="tips" v-if="tips"></p>
          </slot>
        </div>
        <div class="artm-actionsheet-menus">
          <div class="artm-actionsheet-menu" :class="[menu.disabled && 'artm-actionsheet-menu_disabled']" v-for="(menu, index) in menus" @click="!menu.disabled && onClickMenu(menu.value)" v-text="menu.value"></div>
        </div>
        <div class="artm-actionsheet-actions" v-if="showCancel">
          <div class="artm-actionsheet-action" @click="onClickCancel">
            <slot name="cancel">取消</slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
	import {Screen} from '../../../utils/screen'
	import JrvmMask from '../../mask/index'

	export default {
		name: 'artm-actionsheet',
		props: {
			value: Boolean,
			// actionsheet 部分
			trans: {
				type: String,
        default: 'actionsheet-popup'
      },
			showTitle: {
				type: Boolean,
        default: false
      },
			title: String,
			tips: String,
			showCancel: {
				type: Boolean,
				default: false
			},
      autoClose: {
				type: Boolean,
        default: true
      },
			menus: {
				type: Array,
				default: () => ([])
			},
			// mask 部分
			maskTrans: {
				type: String,
				default: 'actionsheet-fade'
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
			onClickMenu (val) {
				if (this.autoClose) {
					this.show = false
        }
				this.$emit("on-click-menu",val);
			},
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
  @import "../../../styles/components/actionsheet";
</style>