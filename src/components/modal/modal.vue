<template>
  <div class="modal">
	  <div class="modal-cover" @click='closemModal' v-if='isShowModal'></div>
	  <transition name='drop'>
	  	<div class="modal-content" v-if='isShowModal'>
		  	<p class="modal-close" @click='closemModal'>x</p>
		  	<slot>empty</slot>
		  </div>
	  </transition>
  </div>
</template>

<script>
export default {
	props: {
		isShowModal: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		closemModal() {
			this.$emit('closeMe')
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.modal
	position fixed
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
		width 350px
		max-height 50%
		left 50%
		top 40%
		padding 15px
		transform translate(-50%,-50%)
		background #fff
		box-shadow 0 0 2px #eee
		z-index 20
		&.drop-enter-active
			transition all .8s ease 
		&.drop-leave-active
			transition all .5s ease
		&.drop-enter,&.drop-leave-active
			transform translate(-200px, -500px)
			opacity 0
		.modal-close
			position absolute
			right 5px
			top 5px
			padding 5px
			font-weight 700
			color rgba(7,17,27,0.8)
			cursor pointer
</style>
