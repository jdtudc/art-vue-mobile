<template>
  <div class="artm-page-description">
    <artm-list title="基本用法">
      <artm-list-item title="点击打开详细说明" arrow @on-click="toggleDescription"></artm-list-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
    <transition name="scale-fade">
      <artm-description :title="title" :content="content" v-if="showDescription" @on-close="toggleDescription"></artm-description>
    </transition>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				title: "规则说明",
        content: [
        	"1.说明内容",
          "2.说明内容说明内容说明内容说明内容",
          "3.说明内容",
          "4.说明内容说明内容说明内容说明内容说明内容",
          "5.滚动内容测试滚动内容测试滚动内容测试",
          "6.滚动内容测试滚动内容测试滚动内容测试",
          "7.滚动内容测试滚动内容测试滚动内容测试",
          "8.滚动内容测试滚动内容测试滚动内容测试",
					"5.滚动内容测试滚动内容测试滚动内容测试",
					"6.滚动内容测试滚动内容测试滚动内容测试",
					"7.滚动内容测试滚动内容测试滚动内容测试",
					"8.滚动内容测试滚动内容测试滚动内容测试",
					"5.滚动内容测试滚动内容测试滚动内容测试",
					"6.滚动内容测试滚动内容测试滚动内容测试",
					"7.滚动内容测试滚动内容测试滚动内容测试",
					"8.滚动内容测试滚动内容测试滚动内容测试",
        ],
				showDescription: false
			}
		},
		components: {},
		methods: {
			toggleDescription () {
				this.showDescription = !this.showDescription;
      }
		},
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-description {
    // scale-fade
    .scale-fade-enter-active {
      transition: all 0.2s ease-out;
      transform: scale(1);
      opacity: 1;
    }
    .scale-fade-enter {
      transform: scale(0.9);
      opacity: 0;
    }
  }
</style>
