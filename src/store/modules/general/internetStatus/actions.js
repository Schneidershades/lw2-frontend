import axios from 'axios'

// get products
export const setConnection = ({ commit, dispatch, rootState}, payload) => {
	console.log(payload)
	commit('setConnection', payload)

	if(payload != false ){
        return dispatch('adminOrders/sendOfflineOrders', null, { root: true })
    }

}

// get products
export const checkOnline = ({ commit, dispatch, rootState}, payload) => {
	console.log(payload)
	commit('setConnection', payload)

	if(payload != false ){
        dispatch('adminOrders/sendOfflineOrders', null, { root: true })
        dispatch('adminShopping/getProducts', null, { root: true })
        dispatch('locationHistory/getLocationHistory', null, { root: true })
        return dispatch('customerPlateNumbers/getPlateNumbers', null, { root: true })
    }

}