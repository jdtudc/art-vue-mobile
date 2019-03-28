<template>
    <div class="artm-page-switch">
        <artm-list title="基本用法">
            <artm-list-item title="默认 false">
                <artm-switch :auto-switch="true" slot="value"></artm-switch>
            </artm-list-item>
            <artm-list-item title="默认 true">
                <artm-switch :active="true" :auto-switch="true" slot="value"></artm-switch>
            </artm-list-item>
        </artm-list>
        <artm-list title="文字用法">
            <artm-list-item title="带自定义文字">
                <artm-switch :auto-switch="true" slot="value">
                    <div slot="open">开</div>
                    <div slot="close">关</div>
                </artm-switch>
            </artm-list-item>
        </artm-list>
        <artm-list title="异步用法">
            <artm-list-item title="1秒后切换">
                <artm-switch :active="switchActive" :auto-switch="false" @on-change="changeSwitch" slot="value">
                    <div slot="open">开</div>
                    <div slot="close">关</div>
                </artm-switch>
            </artm-list-item>
        </artm-list>
        <artm-list title="禁用">
            <artm-list-item title="默认 false">
                <artm-switch disabled :auto-switch="true" slot="value"></artm-switch>
            </artm-list-item>
            <artm-list-item title="默认 true">
                <artm-switch disabled :active="true" :auto-switch="true" slot="value"></artm-switch>
            </artm-list-item>
        </artm-list>
        <div class="artm-page-spacing"></div>
    </div>
</template>

<script>
    export default {
    	data () {
    		return {
				switchActive: false
			}
        },
        components: {
        },
        methods: {
					changeSwitch: function () {
						alert("您点击了开关，将在1秒后切换状态")
						let timer = setTimeout(() => {
							this.switchActive = !this.switchActive;
							clearTimeout(timer);
						}, 1000)
					}
				}
    }
</script>

<style type="text/scss" lang="scss">
    .artm-page-list {}
</style>
