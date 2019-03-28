<template>
  <div class="artm-view">
    <div class="artm-view-page">
      <keep-alive include="index">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artm',
  watch: {
    '$route': function (to, from) {
      document.title = to.query.name_en ? to.query.name_en + ' - Art Vue Mobile' : 'Art Vue Mobile'
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  @import "../src/styles/common/reset";
  @import "../src/styles/common/layout";

  body {
    background-color: #fbf9fe;
  }

  .artm-view {
    position: relative;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
    min-height: 100vh;
  }
</style>
