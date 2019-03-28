<template>
  <div class="artm-page-swiper">
    <div class="artm-page-swiper-cont">
      <artm-list title="配置说明">
        <artm-list-item title="查看 options 说明" arrow @on-click="onClick"></artm-list-item>
      </artm-list>
      <div class="artm-page-spacing"></div>
      <artm-swiper :options="options">
        <artm-swiper-slide v-for="(item, index) in list" :key="index">I'm Slide {{ item }}</artm-swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </artm-swiper>
      <div class="artm-page-spacing"></div>
    </div>
  </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				options: {
					pagination: {
						el: '.swiper-pagination'
					}
				},
				list: new Array(5).fill(0).map(((_, index) => {
					return index + 1
        }))
			}
		},
    methods: {
			onClick () {
				window.location.href = 'https://github.com/surmon-china/vue-awesome-swiper'
      }
    },
		components: {
			'artm-swiper': swiper,
			'artm-swiper-slide': swiperSlide,
		},

	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-swiper {
    .swiper-container { text-align: center; height: 50px;
      .swiper-pagination { position: absolute; bottom: 0;}
    }
  }
</style>
