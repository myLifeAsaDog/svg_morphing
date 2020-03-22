<template>
  <section>
    <animation-content v-show="isDuringSlide" :current-page="currentPage" />
    <swiper
      class="swiper"
      ref="swipeWrapper"
      :options="swiperOption"
      @slideChangeTransitionStart="setSlideFlg(true)"
      @slideChangeTransitionEnd="setSlideFlg(false)">
      <swiper-slide v-for="index of 4" :key="index">
        <h2>CONTENT {{ index }}</h2>
        <div class="svgArea">
          <svg-content v-show="!isDuringSlide" :current-page="index - 1" />
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AnimationContent from './animationContent'
import SvgContent from './SvgContent'
import 'swiper/css/swiper.css'

export default {
  name: 'swipe-content',
  components: { Swiper, SwiperSlide, AnimationContent, SvgContent },
  data () {
    return {
      currentPage: 0,
      isDuringSlide: false,
      swiperOption: {
        speed: 500,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.swipeWrapper && this.$refs.swipeWrapper.$swiper
    }
  },
  mounted () {
    this.swiper.on('slideChange', () => {
      this.onSlideChange(this)
    })
  },
  methods: {
    setSlideFlg (slideFlg) {
      this.isDuringSlide = slideFlg
    },
    onSlideChange (swiperContext) {
      this.currentPage = swiperContext.swiper.activeIndex
    }
  }
}
</script>

<style>
.svgArea {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.swiper-slide {
  padding: 20px 20px 60px 20px;
  background: #ffffff;
  box-sizing: border-box;
  text-align: center;
}
.swiper-pagination {
  padding: 10px 0;
}
</style>
