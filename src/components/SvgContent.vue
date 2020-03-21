<template>
  <svg width="300px" height="300px">
    <path
      :d="pathData"
      fill="red"
    />
  </svg>
</template>

<script>
const SVG_MAP = [
  'M0 125 L300 125 L300 175 L0 175 Z',
  'M125 0 L175 0 L175 300 L125 300 Z',
  'M50,175 A100,100 1, 1, 1 250,175',
  'M150 50 L250 250 L50 250 Z'
]

export default {
  name: 'svg-content',
  props: {
    currentPage: { type: Number, default: 0 }
  },
  computed: {
    pathData () {
      return SVG_MAP[this.currentPage]
    }
  }
}
</script>
