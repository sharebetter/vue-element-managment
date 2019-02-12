<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>
