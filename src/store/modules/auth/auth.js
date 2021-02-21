import axios from 'axios'
import { LocalStorage } from 'quasar'

export default ({
	namespaced: true,

	state: {
		token: null,
		user: null,
	},

	getters:{
		authenticated (state){
			return state.token && state.user
		},

		user(state){
			return state.user
		},
	},

	mutations: {
		SET_TOKEN (state, token) {
			state.token = token
		},

		SET_USER (state, data) {
			state.user = data
		},
	},

	actions: {
		async login({dispatch}, credentials){
			return new Promise((resolve, reject) => {
	            axios.post('api/v1/user/login', credentials).then(response => {
	                dispatch('attempt', response.data.token)
	                resolve()
	            }, error => {
	                dispatch('errorbag/flashMessage', error.response.data.data.error, {root:true})
	                reject()
	            })
		    })

		},

		async attempt({ commit, dispatch, state, rootState }, token){
			if(token){
				commit('SET_TOKEN', token)
			}

			if(!state.token){
				return
			}

			try{
				return new Promise((resolve, reject) => {
		            axios.get('api/v1/user/profile').then(response => {
						LocalStorage.set('user', JSON.stringify(response.data.data))
		                commit('SET_USER', response.data.data)
		                commit('SET_USER', JSON.parse(LocalStorage.getItem('user')))
						resolve()
		            }, error => {
		                // dispatch('errorbag/flashErrorMessage', error.response.data, {root:true})
		                // console.log(error.response.data.data.error)
		                // reject(error.response.data.data.error)
		                reject()
		            })
		        })
			}catch (e){
				commit('SET_USER', null)
				commit('SET_TOKEN', null)
			}
		},

		signOut({ commit, dispatch, rootState }){
			return axios.post('api/v1/user/logout').then(() =>{
				commit('SET_USER', null)
				commit('SET_TOKEN', null)
				commit('shopping/clearCart', null, { root: true })
			})
		},

		async updateProfile({commit, dispatch}, credentials){
			return new Promise((resolve, reject) => {
	            axios.post('api/v1/user/update', credentials).then(response => {
	                dispatch('errorbag/flashMessage', response.data.data.message, {root:true})
	                dispatch('attempt', response.data.token)
	                resolve(response);
	            }, error => {
	                dispatch('errorbag/flashErrorMessage', error.response.data, {root:true})
	                reject(error.response.data.data);
	            })
	        })
		},

		async register({dispatch}, credentials){
			return new Promise((resolve, reject) => {
	            axios.post('api/v1/user/register', credentials).then(response => {
	                dispatch('attempt', response.data.token)
	                resolve()
	            }, error => {
	            	console.log(error.response.data.data.error)
	                dispatch('errorbag/flashMessage', error.response.data.data.error, {root:true})
	                reject()
	            })
		    })
		},
	},
})
