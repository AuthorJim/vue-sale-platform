<template>
  <div id="app">
    <div class="header">
	    <div class="header-wrapper ">
	    	<div class="logo">
		    	<router-link to='/' class='logo-img'><img src="../static/logo.png" alt="" width="40" height="40"></router-link>
		    </div>
		    <ul class="nav">
			    <li class="item" v-if='username!==""'>{{username}}</li>
		    	<li class="item" @click='loginShow' v-if="username===''">登陆</li>
		    	<li class="item" @click='registerShow' v-if="username===''">注册</li>
		    	<li class="item" @click='loginOut' v-if='username!==""'>退出</li>
		    	<li class="item" @click='aboutShow'>关于</li>
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
	  <!-- 登陆弹窗 -->
	   <modal :isShowModal='showLoginModal' @closeMe='hide("showLoginModal")'>
	  	<login @has-log='successLogin'></login>
	  </modal>
	  <!-- 注册弹窗 -->
	  <modal :isShowModal='showRegisterModal' @closeMe='hide("showRegisterModal")'>
	  	Register
	  </modal>
	  <!-- 关于弹窗 -->
	  <modal :isShowModal='showAboutModal' @closeMe='hide("showAboutModal")'>
	  	<p class="about">当有人逼迫你去突破自己，你要感恩他。他是你生命中的贵人,也许你会因此而改变和蜕变。当没有人逼迫你，请自己逼迫自己，因为真正的改变是自己想改变。蜕变的过程是很痛苦的，但每一次的蜕变都会有成长的惊喜。</p>
	  </modal>
  </div>
</template>

<script>
import modal from './components/modal/modal.vue'
import login from './components/login/login.vue'
export default {
	data() {
		return {
			showAboutModal: false,
			showRegisterModal: false,
			showLoginModal: false,
			username: ''
		}
	},
	methods: {
		aboutShow() {
			this.showAboutModal = true
		},
		registerShow() {
			this.showRegisterModal = true
		},
		loginShow() {
			this.showLoginModal = true
		},
		hide(attr) {
			this[attr] = false
		},
		successLogin(res) {
			this.username = res.data.username
			this.showLoginModal = false
		},
		loginOut() {
			this.username = ''
		}
	},
	components: {
		modal,
		login
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
		height 60px
		background #e3e4e1
		.header-wrapper
			width 1200px
			height 60px
			margin 0 auto
			background #e3e4e1
			.logo
				float left
				line-height 40px
				padding 10px 0
				.logo-img
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
					color rgb(147,153,159)
					&:last-child
						padding-right 0
						border-right-width 0
	.container
		flex 1
		width 100%
		height 100%
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
	.modal
		.about
			padding 10px
			text-indent 2em
			margin-right 10px
			font-size 14px
			line-height 24px
			color rgb(7,17,27)
</style>
