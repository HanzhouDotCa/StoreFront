import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'
import Category from '@/components/category'
import Hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hello/58e482d44e108d09fbb4ee05/1'
    },
    {
      path: '/hello/:storeID/:tableID',
      name: 'hello',
      component: Hello
    },
    {
      path: '/menu',
      name: 'nav',
      component: Nav
    },
    {
      path: '/category/:categoryName',
      name: 'category',
      component: Category
    }
  ]
})
