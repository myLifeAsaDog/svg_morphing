<template>
  <svg width="300px" height="300px">
    <path
      :d="pathData"
      fill="red"
    />
  </svg>
</template>

<script>
import { SVG_MAP } from '../assets/svg_data'

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
