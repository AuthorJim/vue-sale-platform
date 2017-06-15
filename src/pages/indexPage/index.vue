<template>
  <div class="index">
    <div class="aside">
    	<div class="products">
    		<div class="title">全部产品</div>
    		<div class="products-item" v-for='product in productList'>
	    		<h2 class="subtitle">{{product.title}}</h2>
	    		<ul>
	    			<li v-for='item in product.list'  class="products-list">
	    				<a :href="item.url">{{item.name}}</a>
	    				<span class="hot-active" v-if='item.type===1'>hot</span></li>
	    			</li>
	    		</ul>
    		</div>
    	</div>
    	<div class="info">
    		<div class="title">
    			最新消息
    		</div>
    		<ul class="news-list">
    			<li v-for='news in newsList' class="news-item">
    				<a :href="news.url">{{news.title}}</a>
    			</li>
    		</ul>
    	</div>
    </div>
    <div class="main">
	    <div class="carousel-wrapper">
	    	<carousel></carousel>
	    </div>
  		<div class="broad-list">
  			<div v-for='item in broadList' class="list-item">
	  			<div class="list-wrapper">
	  				<div class="logo">
	  					<img :src="item.url" height="100" width="100" alt="">
	  				</div>
	  				<div class="content">
	  					<h1 class="title">{{item.title}}</h1>
	  					<div class="dec">{{item.description}}</div>
	  					<div class="pay"><a href="#">{{item.pay}}</a></div>
	  				</div>
	  			</div>
  			</div>
  		</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import carousel from '../../components/carousel/carousel.vue'
export default {
	data() {
		return {
			newsList: [],
			productList: {},
			broadList: []
		}
	},
	created() {
		function getNewsList() {
			return axios.get('/api/newsList')
		}
		function getProductList() {
			return axios.get('/api/productList')
		}
		function getBroadList() {
			return axios.get('/api/broadList')
		}
		axios.all([getNewsList(), getBroadList(), getProductList()])
			.then(axios.spread((news, broad, product) => {
				this.newsList = news.data.data
				this.productList = product.data.data
				this.broadList = broad.data.data
			}))
	},
	components: {
		carousel
		// login
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.index
	display flex
	width 1200px
	margin 0 auto
	.aside
		flex 0 0 270px
		margin 15px
		box-shadow 0 0 1px #ddd
		.products,.info
			margin-bottom 15px
			background #fff
			.title
				padding 10px 15px
				font-size 16px
				background #4fc08d
				color #fff
			.products-item
				padding 0 15px 8px 15px
				border-bottom 1px solid rgba(7,17,27,0.1)
				&:last-child
					border-bottom 0
				.subtitle
					margin 15px 0 8px 0
					line-height 14px
					font-size 14px
					font-weight 700
					color rgba(0,0,0,0.7)
				.products-list
					margin-bottom 5px
					&:last-child
						margin-bottom 0
					.hot-active
						padding 0 2px
						margin-left 5px
						vertical-align top
						font-size 10px
						background rgb(240,20,20)
						color #fff
						border-radius 3px
		.info
			.news-list
				padding 15px
				.news-item
					padding-bottom 8px
					line-height 16px
					&:last-child
						padding-bottom 0
	.main
		flex 1
		.carousel-wrapper
			margin-top 15px
		.broad-list
			.list-item
				display inline-block
				width 440px
				height 145px
				margin 20px 20px 0 0
				&:nth-child(even)
					margin 0
				.list-wrapper
					display flex
					width 100%
					height 100%
					background #fff
					padding 15px
					box-sizing border-box
					.logo
						flex 0 0 100px
						margin-right 20px
					.content
						flex 1
						margin-top 5px
						.title
							font-weight 700
							color rgba(0,0,0,0.7)
						.dec
							margin 15px 0
							font-size 14px
							color rgb(7,17,27)
						.pay
							&>a
								display inline-block
								padding 10px 20px
								color #fff
								background #4fc08d
								border-radius 5px
								text-decoration none
</style>
