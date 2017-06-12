import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import food from '@/components/food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/food',
      name: 'food',
      component: food
    }
  ]
})
