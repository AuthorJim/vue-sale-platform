<template>
  <div class="login">
	   <h2 class="title">登陆 Google</h2>
	   <div class="login-content">
	   	<div class="login-item">
	   		<label>账号：</label>
	   		<input type="text" placeholder="请输入用户名" v-model='usernameModel'>
	   		<span class="error" v-if='!userError.status'>{{userError.errorText}}</span>
	   	</div>
	   	<div class="login-item">
	   		<label>密码：</label>
	   		<input type="password" placeholder="请输入密码" v-model='passwordmodel'>
	   		<span class="error" v-if='!passwordError.status'>{{passwordError.errorText}}</span>
	   	</div>
	   	<div class="login-item">
	   		<button @click='loginForm'>登 陆</button>
	   	</div>
	   
	   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			usernameModel: '',
			passwordmodel: '',
			errorMsg: ''
		}
	},
	methods: {
		loginForm() {
				if (!this.userError.status || !this.passwordError.status) {
					alert('部分选项未通过')
				} else {
					axios.get('/api/login').then((res) => {
						this.$emit('has-log', res.data)
					}).catch((error) => {
						console.log(error)
					})
				}
			}
	},
	computed: {
		userError() {
			let status, errorText
			if (!/@/g.test(this.usernameModel)) {
				status = false
				errorText = '* 必须包含@'
			} else {
				status = true
				errorText = ''
			}
			if (!this.userFlag) {
				errorText = ''
				this.userFlag = true
			}
			return {
				status,
				errorText
			}
		},
		passwordError() {
			let status, errorText
			if (!(this.passwordmodel.length >= 2 && this.passwordmodel.length < 8)) {
				status = false
				errorText = '* 密码必须2-8位'
			} else {
				status = true
				errorText = ''
			}
			if (!this.passwordFlag) {
				errorText = ''
				this.passwordFlag = true
			}
			return {
				status,
				errorText
			}
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
	margin-right 20px
	.title
		line-height 24px
		padding-bottom 20px
		font-weight 700
		color rgba(7,17,27,0.8)
	.login-content
		.login-item
			padding-bottom 35px
			&>label
				color rgba(7,17,27,0.8)
			&>input
				width 220px
				line-height 24px
				border 1px solid #999
				padding 0 5px
			&>button
				display inline-block
				width 100px
				height 30px
				line-height 30px
				margin-left 50px
				background #4fc08d
				border none
				border-radius 10px
				color #fff
				cursor pointer
			.error
				font-size 13px
				font-style italic
				color rgb(240,20,20)
			&:last-child
				padding-bottom 0
</style>
