import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  searchKey: '',//首页，列表，分类页搜索



}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
