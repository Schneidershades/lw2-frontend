import axios from 'axios'

export const getRates = ({ commit }) => {
	return axios.get('api/v1/admin/user/vehicle-package-settings').then((response) => {
		commit('setRates', response.data.data)
		return Promise.resolve()
	})
}


export const getLocationRates = ({ commit }, id) => {
	return axios.get('api/v1/admin/user/location-rates/' + id).then((response) => {
		commit('setRates', response.data.data)
		return Promise.resolve()
	})
}

export const postRate = ({ commit, dispatch }, credentials) => {
	return axios.post('api/v1/admin/user/vehicle-package-settings', credentials).then((response) => {
		dispatch('getRates')
		return Promise.resolve()
	})
}

export const selectRate = ({ commit }, payload) => {
	commit('setSelectedRate', payload)
	return Promise.resolve()
}

export const updateRate = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/vehicle-package-settings/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		// dispatch('getRates')
		return Promise.resolve()
	})
}

export const deleteRate = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/vehicle-package-settings/' + credentials.id
	return axios.delete(url, credentials).then((response) => {
		dispatch('getRates')
		return Promise.resolve()
	})
}
