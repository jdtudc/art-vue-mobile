<template>
    <div class="artm-page-button">
        <div class="artm-page-button-box">
            <div class="artm-page-button-title">基本类型</div>
            <div class="artm-page-button-cont">
                <div class="artm-page-spacing"></div>
                <artm-button type="main" size="large">主要按钮</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="blue" size="large">幽灵按钮</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="minor" size="large">次要按钮</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="text" size="large">文字按钮</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="red" size="large">警示按钮</artm-button>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
        <div class="artm-page-button-box">
            <div class="artm-page-button-title">带自定义图标</div>
            <div class="artm-page-button-cont">
                <div class="artm-page-spacing"></div>
                <artm-button type="main" size="large" icon="http://storage.360buyimg.com/static-res/tech/jrv/1.0.0/button/plus.png">
                    添加计划
                </artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="red" size="large" icon="http://storage.360buyimg.com/static-res/tech/jrv/1.0.0/button/plus.png">
                    添加计划
                </artm-button>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
        <div class="artm-page-button-box">
            <div class="artm-page-button-title">不同尺寸</div>
            <div class="artm-page-button-cont">
                <div class="artm-page-spacing"></div>
                <artm-button type="main" size="large">大号尺寸</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="main">默认尺寸</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button type="main" size="small">小号尺寸</artm-button>
                <div class="artm-page-spacing"></div>
            </div>
        </div>
        <div class="artm-page-button-box">
            <div class="artm-page-button-title">禁用状态</div>
            <div class="artm-page-button-cont">
                <div class="artm-page-spacing"></div>
                <artm-button disabled type="main">禁用状态</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button disabled type="blue">默认状态</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button disabled type="minor">禁用状态</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button disabled type="text">默认状态</artm-button>
                <div class="artm-page-spacing"></div>
                <artm-button disabled type="red" size="large">警示按钮</artm-button>
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
    .artm-page-button {
        &-title { position: relative; font-size: 16px; color: #333333; line-height: 20px; padding: 15px;}
        &-cont { margin: 0 15px;}
    }
</style>
