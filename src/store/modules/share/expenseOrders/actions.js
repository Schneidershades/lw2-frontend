import axios from 'axios'
import { LocalStorage } from 'quasar'

// get products
export const getLocationExpenseOrders = ({ commit }, item) => {
	var URL = 'api/v1/admin/user/location-expense-orders/'+ item
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setOrders', response.data.data)
		return Promise.resolve()
	})
}

export const updateExpenseOrders = ({ commit, dispatch }, item) => {
	var URL = 'api/v1/admin/user/expense-orders/'+ item.id
	return axios.put(URL, item).then((response) => {
		dispatch('getExpenseOrders')
		return Promise.resolve()
	})
}

export const getExpenseOrders = ({ commit }) => {
	var URL = 'api/v1/admin/user/expense-orders'
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setOrders', response.data.data)
		return Promise.resolve()
	})
}

export const findExpenseOrders = ({ commit }, id) => {
	var URL = 'api/v1/admin/user/expense-orders/' + id
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setExpenseOrderDetails', response.data)
		return Promise.resolve()
	})
}


export const getPenaltyAndDeduction = ({ commit }) => {
	var URL = 'api/v1/admin/user/penalty-and-deduction'
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setOrders', response.data.data)
		return Promise.resolve()
	})
}

export const getLoanAndOutstanding = ({ commit }) => {
	var URL = 'api/v1/admin/user/loan-and-outstanding'
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setOrders', response.data.data)
		return Promise.resolve()
	})
}

export const sendExpenseOrder = ({ commit, dispatch}, information) => {
	var URL = 'api/v1/admin/user/expense-orders'
	return axios.post(URL, information).then((response) => {
		console.log(response.data)
		let user = JSON.parse(LocalStorage.getItem('user'))

		// store notes
		if(!user){
			return console.log('user location not found')
		}
		dispatch('getLocationExpenseOrders', user.location.id)
		return Promise.resolve()
	})
}

export const approveExpenseOrder = ({ commit, dispatch, rootState }, information) => {
	var URL = 'api/v1/admin/user/expense-order-requests'
	return axios.post(URL, information).then((response) => {
		// console.log(response.data.data.message)
	   	dispatch('errorbag/flashMessage', response.data.data.message, {root:true})
		return Promise.resolve()
	}, error => {
	   	dispatch('errorbag/flashMessage', error.response.data.data.error, {root:true})
        return Promise.reject()
    })

}

export const deleteExpenseOrders = ({ commit }, id) => {
	var URL = 'api/v1/admin/user/expense-orders/' + id
	return axios.delete(URL).then((response) => {
		dispatch('getExpenseOrders')
		return Promise.resolve()
	})
}
