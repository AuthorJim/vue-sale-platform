<template>
  <div class="single-choose">
	  <ul>
	  	<li v-for='(item, index) in chooseTypes' class="list-item" :title='item.name' @click='chooseSelection(index)' :class='{active: currentIndex===index}'>{{item.name}}</li>
	  </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0
		}
	},
	props: {
		chooseTypes: {
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
		chooseSelection(index) {
			this.currentIndex = index
			this.$emit('on-change', this.chooseTypes[index])
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.single-choose
		font-size 0
		.list-item
			display inline-block
			height 25px
			line-height 25px
			padding 2px 10px
			margin-right 5px
			border-radius 5px
			border 1px solid #e3e3e3
			font-size 14px
			text-align center
			cursor pointer
			&.active
				background #4fc08d
				color #fff
</style>
