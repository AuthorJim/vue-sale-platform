<template>
  <div class="count">
	  <div class="pay">
		  <h2 class="title">数据统计</h2>
		  <p class="desc">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
		  <div class="pay-content">
		  	<div class="pay-item">
		  		<div class="pay-desc">产品类型：</div>
		  		<div class="pay-detail"><SingleChoose :chooseTypes='productTypes'></SingleChoose></div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">适用地区：</div>
		  		<div class="pay-detail">
		  			<Selection :selectTypes='regionList'></Selection>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">有效时间：</div>
		  		<div class="pay-detail">
		  			<SingleChoose :chooseTypes='timeList'></SingleChoose>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">总价：</div>
		  		<div class="pay-detail">1800元</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc"></div>
		  		<div class="pay-detail">
			  		<div class="btn" @click='showPurchaseModal'>立即购买</div>
		  		</div>
		  	</div>
		  </div>
	  </div>
	  <div class="introduce">
	  	<h2 class="title">产品说明</h2>
	  	<p class="desc">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
	  	<table class="table-wrapper">
	  		<tr>
	  			<td class="td-item">安全安保</td>
	  			<td class="td-item">办公文教</td>
	  			<td class="td-item">彩票</td>
	  			<td class="td-item">车辆物流</td>
	  			<td class="td-item">成人用品</td>
	  			<td class="td-item">出版传媒</td>
	  			<td class="td-item">电脑硬件</td>
	  		</tr>
	  		<tr>
	  			<td class="td-item">电子电工</td>
	  			<td class="td-item">房地产建筑装修</td>
	  			<td class="td-item">分类平台</td>
	  			<td class="td-item">服装鞋帽</td>
	  			<td class="td-item">箱包饰品</td>
	  			<td class="td-item">化工原料制品</td>
	  			<td class="td-item">机械设备</td>
	  		</tr>
	  		<tr>
	  			<td class="td-item">家庭日用品</td>
	  			<td class="td-item">家用电器</td>
	  			<td class="td-item">教育培训</td>
	  			<td class="td-item">节能环保</td>
	  			<td class="td-item">金融服务</td>
	  			<td class="td-item">礼品</td>
	  			<td class="td-item">旅游住宿</td>
	  		</tr>
	  		<tr>
	  			<td class="td-item">美容化妆</td>
	  			<td class="td-item">母婴护理</td>
	  			<td class="td-item">农林牧渔</td>
	  			<td class="td-item">软件</td>
	  			<td class="td-item">商务服务</td>
	  			<td class="td-item">生活服务</td>
	  			<td class="td-item">食品保健品</td>
	  		</tr>
	  		<tr>
	  			<td class="td-item">手机数码</td>
	  			<td class="td-item">通讯服务设备</td>
	  			<td class="td-item">网络服务</td>
	  			<td class="td-item">医疗服务</td>
	  			<td class="td-item">游戏</td>
	  			<td class="td-item">运动休闲娱乐</td>
	  			<td class="td-item">招商加盟</td>
	  		</tr>
	  	</table>
	  </div>
	  <Modal :isShowModal='purchaseModal' @closeMe='hide'>
	  	<div class="purchase-list">
	  		<table class="table-wrapper">
	  			<tr>
	  				<th class="td-item th">产品类型</th>
	  				<th class="td-item th">适用地区</th>
	  				<th class="td-item th">有效时间</th>
	  				<th class="td-item th">总价</th>
	  			</tr>
	  			<tr>
	  				<td class="td-item">红色版</td>
	  				<td class="td-item">北京</td>
	  				<td class="td-item">一年</td>
	  				<td class="td-item">1800</td>
	  			</tr>
	  		</table>
	  	</div>
	  	<div class="bank-choose">
	  		<h2 class="title">请选择银行</h2>
	  		<BankChoose></BankChoose>
	  	</div>
	  	<div class="commit">
	  		<div class="btn">确认购买</div>
	  	</div>
	  </Modal>
  </div>
</template>

<script>
import SingleChoose from './form/singleChoose.vue'
import Selection from './form/selection.vue'
import Modal from '../../../components/modal/modal.vue'
import BankChoose from './form/bankChoose.vue'
export default {
	data() {
		return {
			productTypes: [
				{
					name: '红色版',
					id: 0
				},
				{
					name: '绿色版',
					id: 1
				},
				{
					name: '紫色版',
					id: 2
				}
			],
			timeList: [
				{
					name: '半年',
					id: 1202
				},
				{
					name: '一年',
					id: 1120
				},
				{
					name: '三年',
					id: 11339
				}
			],
			regionList: [
				{
					name: '北京',
					id: 210
				},
				{
					name: '上海',
					id: 21021
				},
				{
					name: '天津',
					id: 4210
				},
				{
					name: '广州',
					id: 3210
				},
				{
					name: '武汉',
					id: 1210
				},
				{
					name: '重庆',
					id: 2120
				}
			],
			purchaseModal: false
		}
	},
	methods: {
		showPurchaseModal() {
			this.purchaseModal = true
		},
		hide() {
			this.purchaseModal = false
		}
	},
	components: {
		SingleChoose,
		Selection,
		Modal,
		BankChoose
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
