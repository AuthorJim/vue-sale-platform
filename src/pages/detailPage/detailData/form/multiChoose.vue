<template>
  <div class="multi-selection">
	  <ul>
	  	<li class="list-item" :class='{active: activeSelection(index)}' @click='toggleSelection(index)' v-for='(item, index) in muticChooseTypes'>{{item.name}}</li>
	  </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
	props: {
		muticChooseTypes: {
			type: Array,
			default: [
				{
					name: 'fuck',
					id: 110
				}
			]
		}
	},
	data() {
		return {
			currentIndexs: [0]
		}
	},
	methods: {
		toggleSelection(index) {
			if (this.currentIndexs.indexOf(index) === -1) {
				this.currentIndexs.push(index)
			} else {
				this.currentIndexs = _.remove(this.currentIndexs, (idx) => {
					return idx !== index
				})
			}
			let newObj = _.map(this.currentIndexs, (idx) => {
				return this.muticChooseTypes[idx]
			})
			this.$emit('on-change', newObj)
		},
		activeSelection(index) {
			return this.currentIndexs.indexOf(index) !== -1
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.multi-selection
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
