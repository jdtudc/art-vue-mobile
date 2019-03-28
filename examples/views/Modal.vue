<template>
  <div class="artm-page-modal">
    <artm-list title="用法">
      <artm-list-item title="默认配置标题和内容" arrow @on-click="toggle(1)"></artm-list-item>
      <artm-list-item title="多按钮" arrow @on-click="toggle(2)"></artm-list-item>
    </artm-list>
    <artm-list title="自定义用法">
      <artm-list-item title="自定义按钮" arrow @on-click="toggle(3)"></artm-list-item>
      <artm-list-item title="自定义头部" arrow @on-click="toggle(4)"></artm-list-item>
      <artm-list-item title="自定义内容" arrow @on-click="toggle(5)"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-modal v-model="show1" title="Modal 标题" content="Modal 内容" @on-click-confirm="toggle(1)"></artm-modal>
    </div>
    <div v-transferdom>
      <artm-modal v-model="show2" title="Modal 标题" content="Modal 内容" @on-click-confirm="toggle(2)">
        <a class="artm-modal-btn artm-modal-btn_blue bdt" href="javascript:;" @click="toggle(2)" slot="footer">按钮一</a>
        <a class="artm-modal-btn artm-modal-btn_blue bdt" href="javascript:;" @click="toggle(2)" slot="footer">按钮二</a>
        <a class="artm-modal-btn artm-modal-btn_weak bdt" href="javascript:;" @click="toggle(2)" slot="footer">按钮三</a>
      </artm-modal>
    </div>
    <div v-transferdom>
      <artm-modal v-model="show3" title="Modal 标题" content="Modal 内容" @on-click-confirm="toggle(3)">
        <a class="artm-modal-btn artm-modal-btn_blue bdl" href="javascript:;" @click="toggle(3)" slot="footer">按钮一</a>
        <a class="artm-modal-btn artm-modal-btn_weak bdl" href="javascript:;" @click="toggle(3)" slot="footer">按钮二</a>
      </artm-modal>
    </div>
    <div v-transferdom>
      <artm-modal v-model="show4" content="Modal 内容" @on-click-confirm="toggle(4)">
        <h4 class="demo-custom-header" slot="header">自定义头部<span class="demo-custom-header-close" @click="toggle(4)"></span></h4>
      </artm-modal>
    </div>
    <div v-transferdom>
      <artm-modal class="demo-custom-modal" v-model="show5" @on-click-confirm="toggle(5)">
        <h4 class="demo-custom-header" slot="header">验证手机<span class="demo-custom-header-info" @click="clickInfo">?</span></h4>
        <div class="demo-modal-body">
          <p>请输入手机号2345收到的验证码</p>
          <div class="form-msgcode">
            <artm-input type="tel"></artm-input>
            <artm-countdown :total="msgTotal" :start="msgStart" @on-change="changeMsg" @on-finish="finishMsg">
              <artm-button type="main" :disabled="disabled" @click="!disabled && sendMsg()" v-text="msgText"></artm-button>
            </artm-countdown>
          </div>
        </div>
      </artm-modal>
    </div>
    <div v-transferdom>
      <artm-alert v-model="show6" title="验证手机说明" content="我是说明巴拉巴拉" @on-click="clickAlert"></artm-alert>
    </div>

    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				show7: false,

				msgTotal: 5,
				msgText: '发送验证码',
				msgStart: false,
				disabled: false
			}
		},
		methods: {
			toggle(type) {
				switch (type) {
					case 1:
						this.show1 = !this.show1
						break
					case 2:
						this.show2 = !this.show2
						break
					case 3:
						this.show3 = !this.show3
						break
					case 4:
						this.show4 = !this.show4
						break
					case 5:
						this.show5 = !this.show5
						break
					case 6:
						this.show6 = !this.show6
						break
					case 7:
						this.show7 = !this.show7
						break
					default:
						break
				}

			},
			clickInfo() {
				this.toggle(5)
				this.toggle(6)
			},
			clickAlert() {
				this.toggle(6)
				this.toggle(5)
			},

			sendMsg () {
				console.log("发请求发送验证码")
				this.msgStart = true
				this.msgTotal = 5
				this.msgText = `${this.msgTotal}s后重发`
				this.disabled = true
			},
			changeMsg (val) {
				this.msgTotal = val
				this.msgText = `${this.msgTotal}s后重发`
			},
			finishMsg () {
				this.msgStart = false
				this.msgText = '再次发送'
				this.disabled = false
			}
		}
	}
</script>

<style type="text/scss" lang="scss">
  .demo-custom-modal .artm-modal-body {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #ccc;
      transform: scaleY(.5);
      transform-origin: 0 0;
      pointer-events: none;
    }
  }
  .demo-custom-header {
    position: relative;
    &-close {
      position: absolute;
      right: 0;
      width: 18px;
      height: 2px;
      top: 50%;
      margin-top: -1px;
      &:before, &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #c8c8cd;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
    &-info {
      position: absolute;
      right: 0;
      top: 50%;
      width: 26px;
      height: 26px;
      margin-top: -13px;
      background-color: #eeeeee;
      text-align: center;
      line-height: 26px;
      border-radius: 100%;
      color: #999;
    }
  }
  .demo-modal-body {
    position: relative;
    padding: 20px 15px 0;
    text-align: left;
    .form-msgcode {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      .item-content-inner {
        padding-top: 0;
        padding-bottom: 0;
      }
      .artm-input {
        flex: 1;
        width: 0;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        border: 1px solid #F5F5F5;
      }
      .artm-countdown { margin-left: 5px;}
      .artm-button { white-space: nowrap; width: 100px;}
    }

  }
  .artm-page-modal {}
</style>
