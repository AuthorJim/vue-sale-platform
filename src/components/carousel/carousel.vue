<template>
  <div class="carouser" @mouseover='stopPlay' @mouseout='autoPlay'>
	  <div class="img-wrapper">
	  	<a :href="carouserList[currentIndex].url">
	  		<img :src="carouserList[currentIndex].src" alt="">
	  	</a>
	  </div>
	  <ul class="controller">
		  <li v-for='(item, index) in carouserList' @click='goto(index)' class="controller-item">
			  <i :class='{active: index===currentIndex}'>{{index + 1}}</i>
		  </li>
	  </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			carouserList: [
				{
					src: require('./banner_00.jpg'),
					url: 'http://baidu.com'
				},
				{
					src: require('./banner_01.jpg'),
					url: '/'
				},
				{
					src: require('./banner_02.jpg'),
					url: '/'
				},
				{
					src: require('./banner_03.jpg'),
					url: '/'
				}
			]
		}
	},
	methods: {
		goto(index) {
			this.currentIndex = index
		},
		autoPlay() {
			this.intervalId = setInterval(() => {
				if (this.currentIndex < this.carouserList.length - 1) {
					this.currentIndex ++
				} else {
					this.currentIndex = 0
				}
			}, 3000)
		},
		stopPlay() {
			clearInterval(this.intervalId)
		}
	},
	mounted() {
		this.autoPlay()
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.carouser
	position relative
	width 100%
	overflow hidden
	.controller
		position absolute
		bottom 10px
		left 50%
		padding 8px 10px 5px
		transform translate(-50%)
		font-size 0
		.controller-item
			display inline-block
			color #fff
			margin-right 6px
			cursor pointer
			&:last-child
				margin-right
			&>i
				display block
				width 10px
				height 10px
				font-size 0
				border-radius 50%
				background #fff
				&.active
					background #666
</style>
