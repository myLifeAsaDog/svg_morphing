<docs>
  1. beforePathData をSVGで描画
  2. anime で SVG_MAP[newVal] にモーフィング
</docs>

<template>
  <aside>
    <svg id="svgContent" width="300px" height="300px">
      <path
        :d="beforePathData"
        fill="red"
      />
    </svg>
  </aside>
</template>

<script>
import anime from 'animejs'
import { SVG_MAP } from '../assets/svg_data'

export default {
  name: 'animation-content',
  props: {
    currentPage: { type: Number, default: 0 }
  },
  data () {
    return {
      beforePathData: SVG_MAP[0]
    }
  },
  watch: {
    currentPage (newVal, oldVal) {
      this.beforePathData = newVal === 0 ? 0 : SVG_MAP[oldVal]
      anime({
        targets: '#svgContent path',
        duration: 500,
        easing: 'easeInOutQuad',
        d: SVG_MAP[newVal]
      })
    }
  }
}
</script>

<style>
aside {
  position: absolute;
  top: 93px;
  left: 0px;
  z-index: 2;
  width: 100%;
  text-align: center;
}
#svgContent {
  padding: 10px 0 0 20px;
  margin: 0 auto;
}
</style>
