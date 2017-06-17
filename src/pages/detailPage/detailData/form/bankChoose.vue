<template>
  <div class="bank">
	  <ul>
	  	<li v-for='(item, index) in bankList' class="list-item" :class='item.id'>
	  	</li>
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
		bankList: {
			type: Array,
			default() {
				return [
				{
					name: '招商银行',
					id: 'zsyh'
				},
				{
					name: '中国银行',
					id: 'zgyh'
				},
				{
					name: '农业银行',
					id: 'nyyh'
				},
				{
					name: '工商银行',
					id: 'gsyh'
				},
				{
					name: '宁波银行',
					id: 'nbyh'
				},
				{
					name: '民生银行',
					id: 'msyh'
				},
				{
					name: '支付宝',
					id: 'zfb'
				},
				{
					name: '平安银行',
					id: 'payh'
				}
			]
			}
		}
	},
	methods: {
		activeBank(index) {
			this.currentIndex = index
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.bank
	font-size 0
	.list-item
		display inline-block
		width 117px
		height 32px
		margin 5px 2px
		background url('./banks.png') no-repeat
		cursor pointer
		&.active
			border 1px solid #4fc08d
		&.zsyh
			background-position -2160px 0
		&.nyyh
			background-position -1680px 0
		&.zgyh
			background-position -2520px 0
		&.gsyh
			background-position -2640px 0
		&.nbyh
			background-position -240px 0
		&.msyh
			background-position -2760px 0
		&.zfb
			background-position -1920px 0
		&.payh
			background-position -2400px 0
</style>
