<template>
    <div class="artm-page-develop">
        <div class="artm-page-develop-header">
            <i class="icon-home" @click="pushTo('/')"></i>
            <h1 class="artm-page-develop-header-title" v-text="title"></h1>
        </div>
        <div class="artm-page-develop-cont">
            <div>
                <div class="coffee"></div>
                <p class="tips">- 来杯茶休息一下吧 -</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	data () {
    		return {
    			title: "In Develop",
            }
        },
        methods: {
	        pushTo (path) {
                this.$router.push({ path: path})
            },
        }
    }
</script>

<style type="text/scss" lang="scss">
    @import "../../src/styles/common/mixin";
    @import "../../src/styles/common/var";
    .artm-page-develop {
        &-header { padding: 20px 15px; @include lm(); line-height: 20px;
            .icon-home { position: relative; display: block; width: 20px; height: 20px; background: url("../assets/css/img/icon-home.png") no-repeat center center; background-size: cover; margin-right: 30px;
                &:after { content: ""; position: absolute; width: 1px; height: 15px; top: 2.5px; right: -15px; background-color: $borderColor;}
            }
            &-title { font-size: 19px; color: #000;}
        }
        &-cont { padding: 0 15px; height: 300px; @include mm();
            @keyframes steam {
                100% { top: -39px; background: rgb(238,238,238); box-shadow: 34px 0 0 rgb(238,238,238), 17.5px -15px 0 rgb(238,238,238); opacity: 0.25;}
            }
            .coffee { position: relative; height: 49px; width: 39px; margin: 0 auto; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background: linear-gradient(to bottom left, rgb(247,148,30), rgb(194,108,7)); transform: translate3d(-5px, 0, 0);
                &:before { position: absolute; content: ""; right: -10px; top: 5px; width: 10px; height: 24px; border: 5px solid rgb(247,147,30); background: transparent; border-left: 5px solid transparent; border-bottom: 5px solid rgb(231,129,8); border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
                &:after { content: ""; position: absolute; width: 5px; height: 29px; background: rgb(225,225,225); border-radius: 4px; top: -29px; box-shadow: 34px 0 0 rgb(225,225,225), 17.5px -15px 0 rgb(225,225,225); opacity: 1; animation: steam 3.45s ease infinite;}
            }
            .tips { font-size: 14px; line-height: 1.6; margin-top: 20px; color: #888; letter-spacing: 0.5em;}
        }
    }
</style>
