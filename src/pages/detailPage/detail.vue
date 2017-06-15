<template>
  <div class="detail">
	  <div class="nav">
	  	<div class="logo"><img :src='imgItem' width="100" alt=""></div>
	  	<ul class="production">
		  	<router-link class='list-item' :class='{on: item.path===currentPath}' v-for='item in productList' :to="{path: item.path}" :key='item.id' tag='li'>{{item.name}}</router-link>
		  </ul>
	  </div>
	  <div class="content">
		  <keep-alive>
		  	<router-view></router-view>
		  </keep-alive>
	  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			productList: [],
			imgMap: {
				'/detail/count': 'http://wx4.sinaimg.cn/mw690/006p2lMSgy1fgkjm32xgej302s02swep.jpg',
				'/detail/forecast': 'http://wx2.sinaimg.cn/mw690/006p2lMSgy1fgkjm3sb98j302s02sjrh.jpg',
				'/detail/analysis': 'http://wx1.sinaimg.cn/mw690/006p2lMSgy1fgkjm48gojj302s02saa2.jpg',
				'/detail/publish': 'http://wx3.sinaimg.cn/mw690/006p2lMSgy1fgkjm4ube0j302s02s3yj.jpg'
			}
		}
	},
	created() {
		axios.get('/api/productList').then((res) => {
			this.productList = res.data.data.pc.list
		}).catch((error) => {
			console.log(error)
		})
	},
	computed: {
		imgItem() {
			return this.imgMap[this.$route.path]
		},
		currentPath() {
			return this.$route.path.slice(8)
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.detail
	display flex
	width 1200px
	margin 0 auto
	.nav
		flex 0 0 200px
		margin 15px
		box-shadow 0 0 1px #ddd
		background #fff
		.logo
			width 100%
			height 100px
			text-align center
		.production
			padding 20px 0
			.list-item
				text-indent 20px
				line-height 34px
				font-size 14px
				color rgba(7,17,27,0.8)
				cursor pointer
				&:hover
					color #fff
					background #4fc08d
				&.on
					color #fff
					background #4fc08d
	.content
		width 100%
		margin-top 15px
		background #fff
		padding 20px
		.title
			margin-bottom 20px
			font-size 20px
			color rgba(7,17,27,0.8)
		.desc
			line-height 1.8
			color rgba(7,17,27,0.5) 
			font-size 14px
</style>
