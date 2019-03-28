<template>
    <div class="artm-page-mask">
        <artm-list title="常用类型">
            <artm-list-item title="默认Mask" arrow @on-click="toggleMask1"></artm-list-item>
            <artm-list-item title="取消点击关闭" arrow @on-click="toggleMask2"></artm-list-item>
        </artm-list>
        <artm-list title="复合类型">
            <artm-list-item title="分享" arrow @on-click="toggleShare">
                <div class="share-cont">
                    <img src="//storage.360buyimg.com/static-res/tech/artm/site/eg-share.png" alt="">
                </div>
            </artm-list-item>
        </artm-list>
        <div class="artm-page-spacing"></div>
        <artm-mask v-if="showMask1" @on-click="toggleMask1"></artm-mask>
        <artm-mask v-if="showMask2" unclickable @on-click="toggleMask2">
            <div class="mask-cont">
                <artm-button size="large" type="main" @click="toggleMask2">点我关闭遮罩</artm-button>
            </div>
        </artm-mask>
        <artm-mask v-if="showShare" @on-click="toggleShare">
            <div class="share-cont">
                <img src="//storage.360buyimg.com/static-res/tech/artm/site/eg-share.png" alt="">
            </div>
        </artm-mask>
    </div>
</template>
<script>
    export default {
    	data () {
    		return {
				showShare: false,
				showMask1: false,
				showMask2: false
            }
        },
        components: {
        },
        methods: {
			toggleMask1 () {
				this.showMask1 = !this.showMask1;
			},
			toggleMask2 () {
				this.showMask2 = !this.showMask2;
			},
			toggleShare () {
            	this.showShare = !this.showShare;
            },
        }
    }
</script>

<style type="text/scss" lang="scss">
    .artm-page-mask {
        .share-cont { padding-top: 12px; padding-right: 8px;}
        .mask-cont { padding: 15px;}
    }
</style>
