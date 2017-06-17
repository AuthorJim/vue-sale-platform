<template>
  <div class="selection">
	  <div class="selection-text">
	  	<div>{{selectText}}</div>
	  	<div class="icon-wrapper" @click='toggleDrop'><span class="icon"></span></div>
	  </div>
	  <ul class="selection-drop" v-if='dropShow'>
	  	<li class="drop-item" v-for='(item, index) in selectTypes' @click='changeSelectText(index)'>{{item.name}}</li>
	  </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			dropShow: false,
			selectText: this.selectTypes[0].name
		}
	},
	props: {
		selectTypes: {
			type: Array,
			default: [
				{
					name: 'fuck',
					id: 110
				}
			]
		}
	},
	methods: {
		toggleDrop() {
			this.dropShow = !this.dropShow
		},
		changeSelectText(index) {
			this.selectText = this.selectTypes[index].name
			this.dropShow = false
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.selection
	position relative
	.selection-text
		position relative
		display inline-block
		height 25px
		line-height 25px
		padding 0 20px 0 10px
		border 1px solid #e3e3e3
		border-top-left-radius 3px
		border-top-right-radius 3px
		background #fff
		cursor pointer
		.icon-wrapper
			position absolute
			width 20px
			height 25px
			right 0
			top 0
			.icon
				position absolute
				left 50%
				top 50%
				transform translate(-50%,-50%)
				width 0
				height 0
				line-height 0
				border-left 4px solid transparent
				border-right 4px solid transparent
				border-top 6px solid #ccc
	.selection-drop
		position absolute
		top 28px
		left 0
		z-index 5
		border 1px solid #e3e3e3
		border-top-width 0
		background #fff
		.drop-item
			height 24px
			line-height 24px
			padding 0 20px 0 10px
			cursor pointer
			&:hover
				background #ddd
</style>
