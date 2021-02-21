import axios from 'axios'

export const getDiscounts = ({ commit }) => {
	return axios.get('api/v1/admin/user/discount-settings').then((response) => {
		console.log(response.data)
		commit('setDiscounts', response.data.data)
		return Promise.resolve()
	})
}

export const postDiscount = ({ commit, dispatch }, credentials) => {
	return axios.post('api/v1/admin/user/discount-settings', credentials).then((response) => {
		dispatch('getDiscounts')
		return Promise.resolve()
	})
}

export const selectDiscount = ({ commit }, payload) => {
	commit('setSelectedDiscount', payload)
	return Promise.resolve()
}

export const updateDiscount = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/discount-settings/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		dispatch('getDiscounts')
		return Promise.resolve()
	})
}