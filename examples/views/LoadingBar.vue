<template>
    <div class="artm-page-loadingBar">
        <div class="artm-page-loadingBar-box">
            <div class="artm-page-loadingBar-title">操作</div>
            <div class="artm-page-loadingBar-cont">
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large" @click="loadingConfig">进度条样式配置，成黑底蓝条</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large" @click="loadingStart">进度条加载开始</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large" @click="loadingUpdate">进度条进度设置</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large" @click="loadingFinish">进度条加载完成</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large" @click="loadingError">进度条加载错误</artm-button>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
    </div>
</template>
<script>
	import loadingBar from '../../src/components/loading-bar/loading-bar'

	export default {
		data () {
			return {
				progress: 60,
            }
        },
		methods: {
			loadingConfig () {
				loadingBar.config({
					barBg: 'black',
					successBg: 'blue',
					failBg: 'red'
				});
			},
			loadingStart () {
				loadingBar.start();
			},
			loadingUpdate () {
				const next = this.progress + parseInt(5 * Math.random());
				this.progress = next > 100 ? 100 : next;
				loadingBar.update(this.progress);
			},
			loadingFinish () {
				loadingBar.finish();
			},
			loadingError () {
				loadingBar.error();
			},
        }
    }
</script>

<style type="text/scss" lang="scss">
    .artm-page-loadingBar {
        &-title { position: relative; font-size: 16px; color: #333333; line-height: 20px; padding: 15px;}
        &-cont { margin: 0 15px;
        }
    }
</style>
