import axios from 'axios'
import localforage from 'localforage'
import { LocalStorage } from 'quasar'
import { localForageService } from '../dispatchApi/localForageService'


// get products
export const getOrders = ({ commit, dispatch, rootState }) => {
	if(rootState.auth.role != 'user' ){
		return axios.get('api/v1/auth/orders').then((response) => {
			// console.log(response.data)
			commit('setOrders', response.data.data)
			return Promise.resolve()
		})
	}else{
		return axios.get('api/v1/auth/orders').then((response) => {
			// console.log(response.data)
			commit('setOrders', response.data.data)
			return Promise.resolve()
		})
	}
}

export const getOfflineOrders = async({state, commit, dispatch, rootState }, item) => {
	if (await localForageService.getItem('orders') == null){
		return localForageService.setItem('orders', [])
	}
	if(item==null){
		return localForageService.setItem('orders', state.orders)
	}
	return localForageService.setItem('orders', item)
}




export const placeOrder = ({ commit, dispatch, rootState }, order) =>{
	return axios.post('api/v1/auth/orders', order).then((response) => {
		commit('adminShopping/applyResetDiscountData', null, { root: true })
		dispatch('shopping/removeAllProductFromCartLocalStorage', null, { root: true })
		commit('setOrderDetails', response.data.data)
		return Promise.resolve()
	})
}


// get products
export const getOrderId = ({ commit }, item) => {
	var URL = "api/v1/auth/orders/"+item
	return axios.get(URL).then((response) => {
		commit('setOrderDetails', response.data.data)
		return Promise.resolve()
	})
}

export const paymentProcess = ({commit}, item) => {
	// var content = JSON.stringify(item)

	return axios.post('api/v1/auth/payment/gateway', item).then((response) => {
		// console.log(content)
		// console.log(response.data.data)
		commit('setPaymentDetails', item)
		dispatch('startPaymentTimeout')
		return Promise.resolve()
	})
}


export const startPaymentTimeout = ({ commit, dispatch, state}) =>{
	if(state.paymentTimeout !== null){
		return 
	}

	// set save timeout 1000ms
	commit('setPaymentTimeout', {
		callback(){
			dispatch('stopPaymentTimeout')
		},
		delay: 5000
	})
}

export const stopPaymentTimeout = ({ commit }) =>{
	commit('stopPaymentTimeout')
}


export const payAtLocation = ({ commit }, item) =>{
	var url = 'api/v1/auth/payment/location/order/' + item
	return axios.get(url).then((response) => {
		commit('setPaymentDetails', response.data.data)
		return Promise.resolve()
	})
}

export const saveTransaction = async({ state, commit, dispatch, rootState }, order) =>{
	commit('updateTransaction', order)
	dispatch('storeTransactionInLocalStorage')

	console.log(await localForageService.getItem('orders'))

	commit('setOrders', await localForageService.getItem('orders'))
	var receipt = LocalStorage.getItem('receiptOrderNumber')
	var newNumber = ++receipt
	LocalStorage.set('receiptOrderNumber', newNumber)
	dispatch('updateRecieptNumber')
	dispatch('adminShopping/removeAllProductFromCart', null, { root: true })

	let auth = rootState.auth.user

	dispatch('sendOfflineOrders', state.orders)


	dispatch('locationHistory/getLocationHistory', null, { root: true })
	
}

export const storeTransactionInLocalStorage = async({ state, commit, dispatch}) =>{
	// console.log({ "data": state.orders })
	await dispatch('getOfflineOrders', state.orders)
}

export const clearTransaction = ({ state, commit, dispatch, rootState }, order) =>{
	commit('clearOrder')
	LocalStorage.set('transaction', null)
	dispatch('adminShopping/removeAllProductFromCart', null, { root: true })
	commit('adminShopping/applyResetDiscountData', null, { root: true })
	dispatch('customerPlateNumbers/removeCurrentPlateNumberFromLocalStorage', null, { root: true })
}


export const storeOrder = ({ state, commit, dispatch, rootState }, order) =>{
    localForageService.setItem('orders', state.orders)
	commit('adminShopping/applyResetDiscountData', null, { root: true })
	dispatch('customerPlateNumbers/removeCurrentPlateNumberFromLocalStorage', null, { root: true })
}

export const updateRecieptNumber = ({ state, commit, dispatch, rootState }, order) =>{
	commit('setNewOrderNumber', LocalStorage.getItem('receiptOrderNumber'))
} 

export const checkRecieptNumber = ({ state, commit, dispatch, rootState }, order) =>{
	console.log(LocalStorage.getItem('receiptOrderNumber'))
	if(LocalStorage.getItem('receiptOrderNumber') <= 0){
		LocalStorage.set('receiptOrderNumber', JSON.stringify(1001))
	}
}

export const sendOrder = ({ state, commit, dispatch, rootState }, order) =>{
	commit('setOrderDetails', order)
}

export const sendOnlineOrder = ({ state, commit, dispatch, rootState }, order) =>{
	commit('setOnlineOrderDetails', order)
}



export const processRequest = async({ state, commit, dispatch, rootState }, order) =>{
	commit('setUpdateOrderDetails', order)
	dispatch('sendOfflineOrders', state.orders)
	dispatch('getOfflineOrders', state.orders)
	commit('setOrders', await localForageService.getItem('orders'))
}


export const setCurrentUserEditRight = async ({ commit }, items) =>{
	return commit('setCurrentUserEditRight', items)
}

export const setCurrentUserDeleteRight = async ({ commit }, items) =>{
	return commit('setCurrentUserDeleteRight', items)
}

export const signInaUserWithEditPrivilege = async ({ commit }, items) =>{
	await axios.post('api/v1/admin/user/permission/authorize', items).then((response) => {
		commit('setSignedInaUserWithEditPrivilege', true)
		return Promise.resolve()
	}).catch((error) => {
        return Promise.reject()
    }) 
}

export const signInaUserWithDeletePrivilege = async ({ commit }, items) =>{
	await axios.post('api/v1/admin/user/permission/authorize', items).then((response) => {
		commit('setSignedInaUserWithDeletePrivilege', true)
		return Promise.resolve()
	}).catch((error) => {
        return Promise.reject()
    }) 
}



export const getUsersWithRight = async ({ commit }, item) =>{
	// console.log(items)
	await axios.post('api/v1/admin/user/check-permission', {'permission' : item}).then((response) => {
		console.log(response.data)
		commit('setUsersWithRight', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}

export const getUserDeletePrivilege = async ({ commit }, item) =>{
	// console.log(items)
	await axios.post('api/v1/admin/user/check-permission', {'permission' : item}).then((response) => {
		// console.log(response.data)
		commit('setUserDeletePrivilege', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}

export const sendOfflineOrders = async ({ state, commit, dispatch, rootState }, item) =>{
	var orders = await dispatch('getOfflineOrders')


	commit('adminShopping/setSignedInaUserWithDiscountPrivilege', null, {root:true})

	commit('setOrders', orders)

	var concludedOrders = orders.filter(x => x.status == 'complete' || x.status == 'edit' || x.status == 'delete' || x.status == 'pending' || x.status == 'processing');

	// var notConcludedOrders = state.orders.filter(x => x.status != 'complete' || x.status != 'edit' || x.status != 'delete');
	var notConcludedOrders = orders.filter(function( obj ) {
	    return obj.status == 'pending';
	});

	console.log(1, concludedOrders)
	console.log(0, notConcludedOrders)

	// online status
	let online = rootState.internetStatus.connected

	// store notes
	// if(online == false){
	// 	console.log('offline')
	// 	return
	// }

	if (orders == [] || orders == null){
		console.log('empty')
		return 
	}

	console.log('online and with content')

	await axios.post('api/v1/admin/user/offline-orders', {'orders' : concludedOrders}).then((response) => {
		dispatch('getOfflineOrders', notConcludedOrders)
		// commit('setOrders', notConcludedOrders)
		let auth = rootState.auth.user

		if(auth){
			console.log('checking online')
			dispatch('locationHistory/getLocationHistory', null, { root: true })
			dispatch('dashboard/getLocationDashboard', null, { root: true })
			dispatch('auth/attempt', rootState.auth.token, { root: true })
			dispatch('adminShopping/getProducts', null, { root: true })
		}else{
			dispatch('locationHistory/getLocationHistory', null, { root: true })
		}


		dispatch('customerPlateNumbers/getPlateNumbers', null, { root: true })

		
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})	
}


export const clearofflineOrders = ({ state, commit, dispatch, rootState }, order) =>{
	// LocalStorage.set('orders', JSON.stringify([]))
	localForageService.setItem('orders', [])
	LocalStorage.set('transaction', null)
	LocalStorage.set('plate_number', null)
	commit('setCurrentOrders', JSON.stringify([]))
}