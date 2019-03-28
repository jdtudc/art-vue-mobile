<template>
    <div class="artm-page-icon">
        <div class="artm-page-icon-box">
            <div class="artm-page-spacing"></div>
            <div class="artm-page-icon-cont">
                <i class="icon icon-success"></i>
                <i class="icon icon-warning"></i>
                <i class="icon icon-error"></i>
                <i class="icon icon-loading"></i>
            </div>
            <div class="artm-page-spacing"></div>
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
    .artm-page-icon {
        &-title { position: relative; font-size: 16px; color: #333333; line-height: 20px; padding: 15px;}
        &-cont { margin: 0 15px; display: flex; flex-wrap: wrap;
            i.icon { display: block; width: 32px; height: 32px; margin: 4px;}
            .icon-success { background: url("//storage.360buyimg.com/static-res/tech/jrv/1.0.0/modal/success.png") no-repeat center center; background-size: 100%;}
            .icon-warning { background: url("//storage.360buyimg.com/static-res/tech/jrv/1.0.0/modal/warning.png") no-repeat center center; background-size: 100%;}
            .icon-error { background: url("//storage.360buyimg.com/static-res/tech/jrv/1.0.0/modal/error.png") no-repeat center center; background-size: 100%;}
            .icon-loading { box-sizing: border-box; border-radius: 100%; border: 2px solid #fff; border-bottom-color: rgba(255, 255, 255, 0.1);}
        }
    }
</style>
