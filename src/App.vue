<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import footer from './components/footer/footer.vue'
export default {
	components: {
		'v-header': header,
		'v-footer': footer
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
	display flex
	flex-flow column
	min-height 100%
	.container
		flex 1
		background #f3f5f7
</style>
