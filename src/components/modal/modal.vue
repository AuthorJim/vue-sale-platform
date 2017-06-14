<template>
  <div class="modal" v-if='isShow'>
	  <div class="modal-cover" @click='closeModal'></div>
	  <div class="modal-content">
	  	<p class="modal-close" @click='closeModal'>x</p>
	  	<slot>empty</slot>
	  </div>
  </div>
</template>

<script>
export default {
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		closeModal() {
			this.$emit('closeMe')
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.modal
	position fixed
	overflow hidden
	width 100%
	height 100%
	.modal-cover
		position fixed
		left 0
		top 0
		bottom 0
		right 0
		background rgba(0,0,0,0.6)
		z-index 15
	.modal-content
		position fixed
		width 30%
		max-height 50%
		left 50%
		top 50%
		padding 15px
		transform translate(-50%,-50%)
		background #fff
		box-shadow 0 0 2px #eee
		z-index 20
		.modal-close
			position absolute
			right 5px
			top 5px
			padding 5px
			font-weight 700
			color rgba(7,17,27,0.8)
			cursor pointer
</style>
