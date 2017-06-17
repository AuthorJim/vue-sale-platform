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
	font-size 14px
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
				color rgba(7,17,27,0.8)
				cursor pointer
				&:hover
					color #fff
					background rgba(79,192,141,0.7)
				&.on
					color #fff
					background #4fc08d
	.content
		width 100%
		margin-top 15px
		.pay,.introduce
			padding 20px
			box-sizing border-box
			background #fff
			color rgba(7,17,27,0.8) 
			.title
				margin-bottom 20px
				font-size 20px
			.desc
				line-height 1.8
		.pay
			margin-bottom 20px
			.desc
				background #f7fcff
				color rgba(7,17,27,0.5)
			.pay-content
				padding 20px 0
				.pay-item
					display flex
					line-height 30px
					margin-bottom 15px
					&:last-child
						margin-bottom 0
					.pay-desc
						flex 0 0 100px
					.pay-detail
						flex 1
						.btn
							display inline-block
							padding 5px 20px
							color #fff
							background #4fc08d
							border-radius 5px
							text-decoration none
							cursor pointer
		.table-wrapper
			width 100%
			margin-top 20px
			.td-item
				padding 15px
				border 1px solid #f0f2f5
		.modal
			.modal-content
				width 640px
				height 330px
				&.drop-enter,&.drop-leave-active
					transform translate(-330px, -500px)
				.purchase-list
					width 100%
					margin-bottom 20px
					.table-wrapper
						text-align center
						.td-item
							padding 10px 15px
							color rgba(7,17,27,0.7)
						.th
							background #4fc08d
							color #fff
							border none
				.bank-choose
					.title
						font-size 16px
						font-weight 700
						margin-bottom 20px
						color rgba(7,17,27,0.7)
				.commit
					margin 20px 0 10px 10px
					.btn
						display inline-block
						padding 12px 20px
						color #fff
						background #4fc08d
						border-radius 5px
						text-decoration none
						cursor pointer
</style>
