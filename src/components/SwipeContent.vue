<template>
  <section>
    <animation-content :current-page="currentPage" />
    <swiper class="swiper" ref="swipeWrapper" :options="swiperOption">
      <swiper-slide>
        <h2>CONTENT 01</h2>
        <svg-content :current-page="0" />
      </swiper-slide>
      <swiper-slide>
        <h2>CONTENT 02</h2>
        <svg-content :current-page="1" />
      </swiper-slide>
      <swiper-slide>
        <h2>CONTENT 03</h2>
        <svg-content :current-page="2" />
      </swiper-slide>
      <swiper-slide>
        <h2>CONTENT 04</h2>
        <svg-content :current-page="3" />
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
      swiperOption: {
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
    onSlideChange (swiperContext) {
      this.currentPage = swiperContext.swiper.activeIndex
    }
  }
}
</script>

<style>
.swiper-slide {
  padding: 20px 20px 60px 20px;
  background: #ffffff;
  box-sizing: border-box;
}
.swiper-pagination {
  padding: 10px 0;
}
</style>
