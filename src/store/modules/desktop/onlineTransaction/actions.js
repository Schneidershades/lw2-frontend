import axios from 'axios'

export const getTransactionOrdersOnline = ({ commit, rootState }, item) => {
	var URL = "api/v1/admin/user/orders-online"
	return axios.post(URL, item).then((response) => {
		commit('setTransactions', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const transactionOrderSelected = ({ commit }, item) => {
	// console.log(item)
	commit('setTransactionsDetails', item)
	commit('setTransactions', null)
}


export const updateOrderPlateNumber = ({state, commit, rootState }, details) => {
	if(!state.transactionDetails){
		return
	}
	return axios.put('api/v1/admin/user/orders-online/'+ state.transactionDetails.id, details).then((response) => {
		commit('setTransactionsDetails', response.data.data)
		return Promise.resolve()
	})
}