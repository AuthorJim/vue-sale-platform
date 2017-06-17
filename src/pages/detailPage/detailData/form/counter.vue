<template>
  <div class="counter">
	  <div class="change-model" @click='minus'>-</div>
	  <div class="num">
	  	<input type="text" v-model='ccurrentNum' class="model"  readonly="readonly">
	  </div>
	  <div class="change-model" @click='plus'>+</div>
  </div>
</template>

<script>
export default {
	props: {
		min: {
			type: Number
		},
		max: {
			type: Number
		}
	},
	data() {
		return {
			ccurrentNum: this.min
		}
	},
	methods: {
		minus() {
			if (this.ccurrentNum <= this.min) {
				return
			} else {
				this.ccurrentNum --
			}
		},
		plus() {
			if (this.ccurrentNum >= this.max) {
				return
			} else {
				this.ccurrentNum ++
			}
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.counter
	font-size 0
	.change-model,.num
		display inline-block
		width 25px
		height 25px
		line-height 25px
		font-size 14px
		border 1px solid #e3e3e3
		text-align center
		cursor pointer
	.change-model
		&:hover
			background #4fc08d
			color #fff
	.num
		.model
			width 40px
			height 23px
			text-indent 6px
			box-sizing border-box
			border none
			outline none
</style>
