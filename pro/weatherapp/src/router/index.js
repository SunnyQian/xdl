import Vue from 'vue'
import Router from 'vue-router'
import SetUp from '@/components/setup/setup'
import HourlyList from '@/components/hourly/hourly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/setup',
      component: SetUp
    },
    {
      path: '/hourly_list',
      component: HourlyList
    }
  ]
})
