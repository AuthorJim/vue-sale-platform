import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/indexPage/index.vue'
import Detail from '../pages/detailPage/detail.vue'
import Count from '../pages/detailPage/detailData/count.vue'
import Forecast from '../pages/detailPage/detailData/forecast.vue'
import Analysis from '../pages/detailPage/detailData/analysis.vue'
import Publish from '../pages/detailPage/detailData/publish.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  {
  path: '/',
  component: Index
  },
  {
	path: '/detail',
	component: Detail,
	redirect: '/detail/count',
	children: [
	{
	path: 'count',
	component: Count
	},
	{
	path: 'analysis',
	component: Analysis
	},
	{
	path: 'forecast',
	component: Forecast
	},
	{
	path: 'publish',
	component: Publish
	}
	]
  }
  ]
})
