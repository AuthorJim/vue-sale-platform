<template>
  <div id="app">
    <router-link :to='{path: "Hello"}'>foo</router-link>
    <router-link :to='{path: "food"}'>bar</router-link>
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
