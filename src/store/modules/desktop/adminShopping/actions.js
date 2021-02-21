import axios from 'axios'
import { LocalStorage } from 'quasar'
import { localForageService } from '../dispatchApi/localForageService'

// get products
export const getProducts = ({ commit, dispatch, rootState }) => {

	let user = JSON.parse(LocalStorage.getItem('user'))

	// store notes
	if(!user){
		return console.log('user location not found')
	}
	
	return axios.get('api/v1/admin/user/location-vehicles/' + user.location.id).then((response) => {
		console.log(response.data.data)
		commit('setProducts', response.data)
		return Promise.resolve()
	})


	// return axios.get('api/v1/vehicles').then((response) => {
	// 	commit('setProducts', response.data)
	// 	return Promise.resolve()
	// }).catch((error) => {
	// 	if (!error.response) {
 //    		return dispatch('internetStatus/setConnection', false, {root:true})
 //        }
 //  		return Promise.reject()
 //  	})
}

// add product to cart
export const addProductToCart = ({ commit, dispatch }, productsItems) =>{
	
	var items = [{
		id: productsItems,
		quantity: 1
	}]

	commit('appendToCart', {
		items
	})

	dispatch('storeCart')	
}

export const storeCart = ({ state, commit}) =>{
	LocalStorage.set('cart', JSON.stringify(state.cart))
	commit('setCart', state.cart)
}

// export const reInitializeProducts = ({ state, commit}) =>{
// 	localForageService.setItem('products', state.products)
// }

export const storeCartFromSession = ({ state }) =>{
	
	var types = state.cart
	// var types = payload
	// console.log(types)
	if(types != [] || types != null){
		// console.log('good')
		var results = types.map(function(item){
		  return {id : item["id"], quantity : item["quantity"]}
		});

		// console.log(results)

		return axios.post('api/v1/cart', {
			results
		});

		// localStorage.removeItem('cart')

		LocalStorage.set('cart', [])

		dispatch('getCart')
	}
}


// remove product from cart
export const removeProductFromCart = ({commit, dispatch }, productId) =>{
	commit('removeFromCart', productId)
	dispatch('storeCart')
}


// remove all from our cart 
export const removeAllProductFromCart = ({ commit, dispatch }) =>{
	commit('clearCart')
	dispatch('storeCart')
}

export const removeAllProductFromCartLocalStorage = ({ commit, dispatch  }) =>{
	commit('clearCart')
	dispatch('storeCart')
}


export const updateCartTotals = ({ commit, dispatch }, items) =>{
	var apianWayId = items[0].id.id
	var quantity = items[0].quantity

	commit('updateToCart', {
		items
	})
	dispatch('storeCart')
}


export const applyCoupon = async ({ commit }, items) =>{
	var couponURL = 'api/v1/coupons/' + items
	await axios.get(couponURL).then((response) => {
		// console.log(response.data.data)
		commit('updateCouponData', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateCouponData', null)
        return Promise.reject()
    }) 
}

export const applyCustomerDiscount = async ({ commit }, items) =>{
	// console.log(items)
	await axios.post('api/v1/admin/user/customer-discounts', items).then((response) => {
		// console.log(response.data.data)
		commit('updateDiscountData', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}


export const applyResetDiscount = async ({ commit }) =>{
	return commit('applyResetDiscountData')
}

export const setUserDiscountPrivilege = async ({ commit }, items) =>{
	// console.log(items)
	return commit('setUserDiscountPrivilege', items)
}


export const signInaUserWithDiscountPrivilege = async ({ commit }, items) =>{
	// console.log(items)
	await axios.post('api/v1/admin/user/permission/authorize', items).then((response) => {
		// console.log(response.data.data)
		commit('setSignedInaUserWithDiscountPrivilege', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}

export const getUsersWithDiscountPrivilege = async ({ commit }) =>{
	// console.log(items)
	await axios.get('api/v1/admin/user/permission/discounts').then((response) => {
		// console.log(response.data)
		commit('setUsersWithDiscountPrivilege', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}

export const getUsersWithRight = async ({ commit }, item) =>{
	await axios.post('api/v1/admin/user/check-permission', {'permission' : item}).then((response) => {
		console.log(response.data)
		commit('setUsersWithDiscountPrivilege', response.data)
		return Promise.resolve()
	}).catch((error) => {
		// console.log(error.response.data)
        // commit('updateDiscountData', null)
        return Promise.reject()
    }) 
}

export const defaultDiscountToZeroOnLocationManagerApp = async ({ commit }) =>{
	return commit('setDefaultDiscountToZeroOnLocationManagerApp')
}

export const defaultDiscountOnWeb = async ({ commit }) =>{
	return commit('setDefaultDiscountOnWeb')
}

