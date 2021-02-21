import axios from 'axios'

export const getCoupons = ({ commit }) => {
	return axios.get('api/v1/admin/user/coupon-settings').then((response) => {
		console.log(response.data)
		commit('setCoupons', response.data.data)
		return Promise.resolve()
	})
}

export const postCoupon = ({ commit, dispatch }, credentials) => {
	return axios.post('api/v1/admin/user/coupon-settings', credentials).then((response) => {
		dispatch('getCoupons')
		return Promise.resolve()
	})
}

export const selectCoupon = ({ commit }, payload) => {
	commit('setSelectedCoupon', payload)
	return Promise.resolve()
}

export const updateCoupon = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/coupon-settings/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		dispatch('getCoupons')
		return Promise.resolve()
	})
}
