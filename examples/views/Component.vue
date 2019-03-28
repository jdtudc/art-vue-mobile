<template>
  <div class="artm-page-component">
    <div class="artm-page-component-header row no-gutter flex-start">
      <i class="icon-home" @click="pushTo('/')"></i>
      <h1 class="artm-page-component-header-title" v-text="title"></h1>
      <h1 class="artm-page-component-header-desc" v-text="desc"></h1>
    </div>
    <div class="artm-page-component-cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      desc: null,
    }
  },
  created() {
    this.title = this.$route.query ? this.$route.query.name_en : null;
  },
  methods: {
    pushTo(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  @import "../../src/styles/common/var";

  .artm-page-component {
    &-header {
      padding: 20px 15px;
      line-height: 20px;

      .icon-home {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        background: url("../assets/css/img/icon-home.png") no-repeat center center;
        background-size: cover;
        margin-right: 30px;

        &:after {
          content: "";
          position: absolute;
          width: 1px;
          height: 15px;
          top: 2.5px;
          right: -15px;
          background-color: $borderColor;
        }
      }

      &-title {
        font-size: 19px;
        color: $mainStrong;
      }
    }

    &-cont {
      .artm-page-spacing {
        height: 15px;
      }

      .artm-page-row-desc {
        font-size: 14px;
        color: $mainWeak;
        line-height: 20px;
      }
    }
  }
</style>
