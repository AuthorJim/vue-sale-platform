<template>
  <div class="publish">
	  <div class="pay">
	  	<h2 class="title">广告发布</h2>
		  <p class="desc">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
		  <div class="pay-content">
		  	<div class="pay-item">
		  		<div class="pay-desc">购买数量：</div>
		  		<div class="pay-detail">
		  			<Counter :min='20' :max='99'></Counter>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">行业：</div>
		  		<div class="pay-detail">
		  			<Selection :selectTypes='professionTypes'></Selection>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">产品版本：</div>
		  		<div class="pay-detail">
		  			<MutiChoose :muticChooseTypes='editionList'></MutiChoose>
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
		  		<div class="pay-detail">330元</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc"></div>
		  		<div class="pay-detail">
			  		<div class="btn">立即购买</div>
		  		</div>
		  	</div>
		  </div>
	  </div>
	  <div class="introduce">
	  	<h2 class="title">广告发布</h2>
		  <p class="desc">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
  </div>
</template>

<script>
import Counter from './form/counter.vue'
import Selection from './form/selection.vue'
import SingleChoose from './form/singleChoose.vue'
import MutiChoose from './form/multiChoose.vue'
export default {
	data() {
		return {
			professionTypes: [
				{
					name: '出版业',
					id: 209
				},
				{
					name: '媒体',
					id: 219
				},
				{
					name: '金融',
					id: 602
				},
				{
					name: '互联网',
					id: 302
				},
				{
					name: '游戏',
					id: 119
				}
			],
			editionList: [
				{
					name: '初级版',
					id: 909
				},
				{
					name: '中级版',
					id: 902
				},
				{
					name: '高级版',
					id: 212
				},
				{
					name: '专家版',
					id: 212
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
			]
		}
	},
	components: {
		Counter,
		Selection,
		SingleChoose,
		MutiChoose
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
