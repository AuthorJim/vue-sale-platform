<template>
  <div class="analysis">
	  <div class="pay">
	  	<h2 class="title">流量分析</h2>
		  <p class="desc">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
		  <div class="pay-content">
		  	<div class="pay-item">
		  		<div class="pay-desc">购买数量：</div>
		  		<div class="pay-detail">
		  			<Counter :min='1' :max='5'></Counter>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">产品类型：</div>
		  		<div class="pay-detail">
		  			<Selection :selectTypes='editionTypes'></Selection>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">有效时间：</div>
		  		<div class="pay-detail">
		  			<SingleChoose :chooseTypes='timeList'></SingleChoose>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">产品版本</div>
		  		<div class="pay-detail">
		  			<MutiChoose :muticChooseTypes='editionList'></MutiChoose>
		  		</div>
		  	</div>
		  	<div class="pay-item">
		  		<div class="pay-desc">总价：</div>
		  		<div class="pay-detail">700元</div>
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
	  	<h2 class="title">产品说明</h2>
	  	<h3 class="subtitle">用户行为指标</h3>
	  	<ul>
	  		<li class="list-item">用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
	  		<li class="list-item">用户在网站的停留时间；</li>
	  		<li class="list-item">用户来源网站（也叫“引导网站”）；</li>
	  		<li class="list-item">用户所使用的搜索引擎及其关键词；</li>
	  		<li class="list-item">在不同时段的用户访问量情况等。</li>
	  	</ul>
	  	<h3 class="subtitle">浏览网站方式</h3>
	  	<ul>
	  		<li class="list-item">用户上网设备类型</li>
	  		<li class="list-item">用户浏览器的名称和版本</li>
	  		<li class="list-item">访问者电脑分辨率显示模式</li>
	  		<li class="list-item">用户所使用的操作系统名称和版本</li>
	  		<li class="list-item">用户所在地理区域分布状况等</li>
	  	</ul>
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
			editionTypes: [
				{
					name: '入门版',
					id: 120
				},
				{
					name: '中级版',
					id: 110
				},
				{
					name: '高级版',
					id: 119
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
			editionList: [
				{
					name: '客户版',
					id: 909
				},
				{
					name: '代理商版',
					id: 902
				},
				{
					name: '专家版',
					id: 212
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
.analysis
	.subtitle
		margin 20px 0 10px
		font-size 18px
		font-weight 700
	.list-item
		line-height 1.8
</style>
