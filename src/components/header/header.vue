<template>
  <div class="header">
    <div class="header-wrapper ">
    	<div class="logo">
	    	<a href="/"><img src="./logo.png" height="40" width="40" alt=""></a>
	    </div>
	    <ul class="nav">
	    	<li class="item"><a href="">登陆</a></li>
	    	<li class="item"><a href="">注册</a></li>
	    	<li class="item"><a href="">关于</a></li>
	    </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
	position relative
	width 100%
	height 60px
	background #e3e4e1
	.header-wrapper
		width 1200px
		margin 0 auto
		.logo
			float left
			line-height 40px
			padding 10px 0
			&>a
				display block
				width 40px
				height 40px
		.nav
			float right
			font-size 0
			.item
				display inline-block
				line-height 14px
				margin 23px 0
				padding 0 8px
				font-size 14px
				border-right 1px solid rgb(147,153,159)	
				&:last-child
					padding-right 0
					border-right-width 0
				&>a
					color rgb(147,153,159)
</style>
