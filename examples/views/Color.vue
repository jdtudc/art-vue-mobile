<template>
    <div class="artm-page-color">
        <div class="artm-page-color-box">
            <div class="artm-page-color-title">主色</div>
            <div class="artm-page-color-cont">
                <div class="artm-page-row-desc">B1为京东来客的主色调，常用于交互态强化和视觉优化；B2常用于 hover；B3常用于 active。</div>
                <div class="artm-page-spacing"></div>
                <div class="row">
                    <div class="col col-8">
                        <div class="color" style="background-color: #0074ff;">
                           <p class="color-name">B1</p>
                           <p class="color-value">#0074ff</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #006def;">
                            <p class="color-name">B2</p>
                            <p class="color-value">#006def</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #0064da;">
                            <p class="color-name">B3</p>
                            <p class="color-value">#0064da</p>
                        </div>
                    </div>
                </div>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
        <div class="artm-page-color-box">
            <div class="artm-page-color-title">辅助色</div>
            <div class="artm-page-color-cont">
                <div class="artm-page-row-desc">辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</div>
                <div class="artm-page-spacing"></div>
                <div class="row">
                    <div class="col col-8">
                        <div class="color" style="background-color: #0bdba8;">
                            <p class="color-name">辅色1</p>
                            <p class="color-value">#0bdba8</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #ffb540;">
                            <p class="color-name">辅色2</p>
                            <p class="color-value">#ffb540</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #f52f3e;">
                            <p class="color-name">辅色3</p>
                            <p class="color-value">#f52f3e</p>
                        </div>
                    </div>
                </div>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
        <div class="artm-page-color-box">
            <div class="artm-page-color-title">中性色</div>
            <div class="artm-page-color-cont">
                <div class="artm-page-row-desc">中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</div>
                <div class="artm-page-spacing"></div>
                <div class="row">
                    <div class="col col-8">
                        <div class="color" style="background-color: #283039;">
                            <p class="color-name">标题</p>
                            <p class="color-value">#283039</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #727682;">
                            <p class="color-name">正文</p>
                            <p class="color-value">#727682</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #bec1ca;">
                            <p class="color-name">图标/辅助文字</p>
                            <p class="color-value">#bec1ca</p>
                        </div>
                    </div>
                </div>
                <div class="artm-page-spacing"></div>
                <div class="row">
                    <div class="col col-8">
                        <div class="color" style="background-color: #f0f2f5; color: #283039;">
                            <p class="color-name">边框/分割线</p>
                            <p class="color-value">#f0f2f5</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #ecf0f9; color: #283039;">
                            <p class="color-name">菜单选中背景</p>
                            <p class="color-value">#ecf0f9</p>
                        </div>
                    </div>
                    <div class="col col-8">
                        <div class="color" style="background-color: #f6f8fc; color: #283039;">
                            <p class="color-name">背景</p>
                            <p class="color-value">#f6f8fc</p>
                        </div>
                    </div>
                </div>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        methods: {
        }
    }
</script>

<style type="text/scss" lang="scss">
    .artm-page-color {
        &-title { position: relative; font-size: 16px; color: #333333; line-height: 20px; padding: 15px;}
        &-cont { margin: 0 15px;
            .color { background-color: #ebebef; padding: 15px; color: #ffffff; line-height: 20px; height: 100%;
                &-name { font-size: 16px; font-weight: 700;}
                &-value { font-size: 12px;}
            }
        }
    }
</style>
