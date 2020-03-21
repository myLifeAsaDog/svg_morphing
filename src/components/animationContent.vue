<template>
  <svg id="svgContent" width="300px" height="300px">
    <path
      :d="pathData"
      fill="red"
    />
  </svg>
</template>

<script>
import anime from 'animejs'

const SVG_MAP = [
  'M0 125 L300 125 L300 175 L0 175 Z',
  'M125 0 L175 0 L175 300 L125 300 Z',
  'M50,175 A100,100 1, 1, 1 250,175',
  'M150 50 L250 250 L50 250 Z'
]

export default {
  name: 'animation-content',
  props: {
    currentPage: { type: Number, default: 0 }
  },
  computed: {
    pathData () {
      let pathIndex = 0
      if (this.currentPage === 0) {
        pathIndex = 0
      } else if (this.currentPage === 3) {
        pathIndex = 3
      } else {
        pathIndex = this.currentPage - 1
      }
      return SVG_MAP[pathIndex]
    }
  },
  watch: {
    currentPage () {
      anime({
        targets: '#svgContent path',
        duration: 1000,
        easing: 'easeInOutQuad',
        d: SVG_MAP[this.currentPage]
      })
    }
  }
}
</script>
