<template>
  <div class="index">
    <div class="aside">
    	<div class="products">
    		<div class="title">全部产品</div>
    		<div class="products-list">
    			<div class="subtitle">{{productList.pc.title}}</div>
	    		<ul class="pc-products">
	    			<li v-for='pcItem in productList.pc.list' class="pc-item"><a :href='pcItem.url'>{{pcItem.name}}</a><span v-if='pcItem.type===1' class="hot-active">hot</span></li>
	    		</ul>
	    		<div class="subtitle">{{productList.app.title}}</div>
	    		<ul class="app-products">
	    			<li v-for='appItem in productList.app.list' class="app-item"><a :href="appItem.url">{{appItem.name}}</a><span v-if='appItem.type===1' class="hot-active">hot</span></li>
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
    	<div class="broad-wrapper">
    		<div class="broad-list">
    			<div v-for='item in broadList'>
    				<div class="logo">
    					<!-- <img :src="item.src" alt=""> -->
    					<img :src="item.url" height="100" width="100" alt="">
    				</div>
    				<div class="content">
    					<h1 class="title">{{item.title}}</h1>
    					<div class="dec">{{item.description}}</div>
    					<div class="pay">立即购买</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			newsList: [
				{
					title: '阿杜39分勇士4-1复仇骑士夺冠',
					url: 'http://baidu.com'
				},
				{
					title: '毫无悬念!杜兰特荣膺总决赛MVP',
					url: '/'
				},
				{
					title: '库里仅2三分也赢',
					url: '/',
					type: 1
				},
				{
					title: '厄文末节6中0',
					url: '/'
				}
			],
			productList: {
				pc: {
					title: 'PC产品',
					list: [
						{
							name: '数据统计',
							url: 'http://baidu.com'
						},
						{
							name: '数据预测',
							url: '/'
						},
						{
							name: '流量分析',
							url: '/',
							type: 1
						},
						{
							name: '广告发布',
							url: '/'
						}
					]
				},
				app: {
					title: '手机应用类',
					list: [
						{
							name: 'App store',
							url: '/'
						},
						{
							name: '华为应用',
							url: '/',
							type: 1
						},
						{
							name: 'Google Play',
							url: '/'
						},
						{
							name: 'Tencent',
							url: '/'
						}
					]
				}
			},
			broadList: [
				{
					title: '开发产品',
					description: '开发产品是一种产品',
					url: '1.png'
				},
				{
					title: '品牌营销',
					description: '品牌营销帮助你的产品更好地找到定位',
					url: './2.png'
				},
				{
					title: '使命必达',
					description: '使命必达快速迭代永远保持最前端的速度',
					url: './3.png'
				},
				{
					title: '勇攀高峰',
					description: '帮你勇闯高峰，到达事业的顶峰',
					url: './4.png'
				}
			]
		}
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
			.products-list
				padding 0 15px
				.subtitle
					margin 15px 0 5px 0
					line-height 14px
					font-size 14px
					font-weight 700
					color rgba(0,0,0,0.7)
				.pc-products
					padding-bottom 8px
					border-bottom 1px solid rgba(7,17,27,0.1)
					.pc-item
						padding 5px
				.app-products
					padding-bottom 8px
					.app-item
						padding 5px
				.hot-active
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
</style>
