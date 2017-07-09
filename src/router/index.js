import Vue from 'vue'
import Router from 'vue-router'


const kxlist = r => require.ensure([], () => r(require('../page/kexielist')), 'kxlist')
const allxuehui = r => require.ensure([], () => r(require('../page/allxuehui')), 'allxuehui')


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
      component: kxlist
    },
    {
      path: '/allxuehui',
      name: 'allxuehui',
      component: allxuehui
    }

  ]
})
