import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import loading from './modules/loading'
import meeting from './modules/meeting'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { user, loading, meeting }
})

export default store
