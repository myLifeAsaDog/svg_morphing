<template>
  <main id="app">
    <header>SVG MORPHING</header>
    <swipe-content />
  </main>
</template>

<script>
import SwipeContent from './components/SwipeContent'

export default {
  name: 'App',
  components: { SwipeContent }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 1;
}
body {
  background: #eeeeee;
}
header {
  padding: 20px 0;
  background: #fafafa;
  border-bottom: solid 1px #dddddd;
  text-align: center;
}
h2 {
  text-align: center;
}
svg {
  padding: 10px;
}
</style>
