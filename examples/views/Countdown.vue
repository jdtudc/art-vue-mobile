<template>
  <div class="artm-page-countdown">
    <artm-list title="自动开始">
      <artm-list-item title="10s倒计时">
        <artm-countdown :total="10" slot="value"></artm-countdown>
      </artm-list-item>
    </artm-list>
    <artm-list title="手动开始">
      <artm-list-item title="点击开始倒计时">
        <artm-switch :active="start" :auto-switch="true" slot="value" @on-change="toggleStart"></artm-switch>
      </artm-list-item>
      <artm-list-item title="10s倒计时">
        <artm-countdown :total="10" :start="start" @on-finish="finish" slot="value"></artm-countdown>
      </artm-list-item>
    </artm-list>
    <artm-list title="自定义格式">
      <artm-list-item title="100s倒计时">
        <artm-countdown :total="100" format="HH小时mm分钟ss秒" slot="value"></artm-countdown>
      </artm-list-item>
    </artm-list>
    <artm-list title="高级用法">
      <artm-list-item title="短信验证码" class="flex-middle">
        <div class="demo-msgcode" slot="value">
          <artm-countdown :total="msgTotal" :start="msgStart" @on-change="changeMsg" @on-finish="finishMsg">
            <artm-button type="main" :disabled="disabled" @click="!disabled && sendMsg()" v-text="msgText"></artm-button>
          </artm-countdown>
        </div>
      </artm-list-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				start: false,

        msgTotal: 5,
				msgText: '发送验证码',
				msgStart: false,
				disabled: false
			}
		},
		methods: {
      finish (times) {
				this.start = false
        console.log(`倒计时了 ${times} 次`)
      },
      toggleStart () {
				this.start = !this.start
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
		},
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-countdown {
    .demo-msgcode { display: block;}
  }
</style>
