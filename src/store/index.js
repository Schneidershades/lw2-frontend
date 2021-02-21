import Vue from 'vue'
import Vuex from 'vuex'

const isOnline = require('is-online');
Vue.use(Vuex)

import state from './state'
import *  as getters from './getters'
import *  as mutations from './mutations'
import *  as actions from './actions'

import auth from './modules/auth/auth'
import errorbag from './modules/general/errorbag'
import internetStatus from './modules/general/internetStatus'
import schedule from './modules/schedule'
import quiz from './modules/quiz'

export default new Vuex.Store({
	state,
	getters,
	mutations:{
		initialize(state, persistedState) {
			// console(state)
		    // use the fetched, persisted state.
		    // In my case, I was reconstructing an array, so I wrote a handler (overwriteStore) to deal with the data rather simplistically
		    overwriteStore(state, { state }); // but do your own thing here.

		    console.log(state)
		    Vue.set(state, 'initialized', true);
	   },
	},
	actions,
	modules:{
		auth,
		internetStatus,
		schedule,
		quiz,
		users,
		errorbag,
	},
})



require('./modules/auth/subscriber.js')
require('./modules/auth/persistencePlugin.js')
require('./modules/auth/roles.js')
// require('./modules/auth/prefetchData.js')