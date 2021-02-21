import axios from 'axios'

export const getPackages = ({ commit }) => {
	return axios.get('api/v1/admin/user/package-settings').then((response) => {
		commit('setPackages', response.data.data)
		return Promise.resolve()
	})
}

export const postPackage = ({ commit, dispatch }, credentials) => {
	return axios.post('api/v1/admin/user/package-settings', credentials).then((response) => {
		// commit('setPartnership', response.data)
		dispatch('getPackages')
		return Promise.resolve()
	})
}

export const selectPackage = ({ commit }, payload) => {
	commit('setSelectedPackage', payload)
	return Promise.resolve()
}

export const updatePackage = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/package-settings/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		console.log(response.data)
		dispatch('getPackages')
		return Promise.resolve()
	})
}
