<template>
  <div id="app">
    <div class="header">
	    <div class="header-wrapper ">
	    	<div class="logo">
		    	<a href="/"><img src="../static/logo.png" height="40" width="40" alt=""></a>
		    </div>
		    <ul class="nav">
		    	<li class="item"><span @click='modalLoginShow'>登陆</span></li>
		    	<li class="item" @click='modalRegisterShow'><span>注册</span></li>
		    	<li class="item" @click='modalAboutShow'><span>关于</span></li>
		    </ul>
	    </div>
	  </div>
    <div class="container">
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    </div>
    <div class="footer">
	    <div class="footer-wrapper">
	    	<div class="line"></div>
	    	<div class="text">&copy; 2017 AuthorJim MIT</div>
	    	<div class="line"></div>
	    </div>
	  </div>
	  <modal :isShow='modalLoginShow' @closeMe='hideModal'>
	  	<h1>Login button</h1>
	  </modal>
	  <modal :isShow='modalRegisterShow' @closeMe='hideModal'>
	  	<h1>register page</h1>
	  </modal>
	  <modal :isShow='modalAboutShow' @closeMe='hideModal'>
	  	<h1>about me</h1>
	  </modal>
  </div>
</template>

<script>
import modal from './components/modal/modal.vue'
export default {
	data() {
		return {
			modalLoginShow: false,
			modalRegisterShow: false,
			modalAboutShow: false
		}
	},
	methods: {
		modalLoginShow() {
			this.modalLoginShow = true
		},
		hideModal() {
			this.modalLoginShow = false
		}
	},
	components: {
		modal
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
	display flex
	position relative
	flex-flow column
	min-height 100%
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
					cursor pointer
					&:last-child
						padding-right 0
						border-right-width 0
					&>span
						color rgb(147,153,159)
	.container
		flex 1
		background #f3f5f7
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
