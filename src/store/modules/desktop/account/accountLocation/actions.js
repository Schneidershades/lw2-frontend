import axios from 'axios'

export const getAccountLocation = ({ commit, rootState }, item) => {
	var URL = "api/v1/admin/user/account/locations-accounts"
	return axios.get(URL).then((response) => {
		commit('setAccountLocation', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const setAccountLocationSelected = ({ commit }, item) => {
	commit('setAccountLocationDetails', item)
}

export const sendTransactions = ({ commit, dispatch, rootState}, item) => {
	var URL = "api/v1/admin/user/account/post-income-expense-transaction"
	var transactions = {
		"transactions": item
	}


	return axios.post(URL, transactions).then((response) => {
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const getAccountLocationDetails = ({ commit, rootState }, item) => {
	var URL = "api/v1/admin/user/account/locations-accounts/"+ item
	return axios.get(URL).then((response) => {
		commit('setAccountLocationDetails', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const getAccountLocationTransactions = ({ commit, rootState }, item) => {
	var URL = "api/v1/admin/user/account/post-income-expense-transaction/"+ item
	return axios.get(URL).then((response) => {
		commit('setAccountLocationTransactions', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const sendAccountLocationTransactionSelected = ({ commit }, item) => {
	commit('setAccountLocationTransactionSelected', item)
	return Promise.resolve()
}

export const deleteAccountLocationTransactionSelected = ({ commit, dispatch, rootState }, item) => {
	var URL = "api/v1/admin/user/account/post-income-expense-transaction/"+ item.id
	return axios.delete(URL).then((response) => {
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		dispatch('getAccountLocationTransactions', item.locationId)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}