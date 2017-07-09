import Vue from 'vue'
import Router from 'vue-router'


const kxlist = r => require.ensure([], () => r(require('../page/kexielist')), 'kxlist')
const allxuehui = r => require.ensure([], () => r(require('../page/allxuehui')), 'allxuehui')
const search = r => require.ensure([], () => r(require('../page/search')), 'search')


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '',
      redirect: '/kxlist'
    },
    {
      path: '/kxlist',
      name: 'kxlist',
      component: kxlist,
      children:[{
        path: 'search',
        name: 'search',
        component: search
      }]
    },
    {
      path: '/allxuehui',
      name: 'allxuehui',
      component: allxuehui
    }

  ]
})
