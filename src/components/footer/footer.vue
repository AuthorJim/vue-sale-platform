<template>
  <div class="footer">
    <div class="footer-wrapper">
    	<div class="line"></div>
    	<div class="text">&copy; 2017 AuthorJim MIT</div>
    	<div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
	width 100%
	height 25px
	background #e3e4e1
	.footer-wrapper
		display flex
		width 90%
		margin 0 auto
		.line
			flex 1
			margin-top 10px
			border-top 1px solid rgba(7,17,27,0.1)
		.text
			line-height 25px
			margin  0 10px
			font-size 12px
			font-style italic
			color rgb(147,153,159)
</style>
