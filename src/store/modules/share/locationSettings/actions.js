import axios from 'axios'

export const getLocations = ({ commit }) => {
	return axios.get('api/v1/admin/user/location-settings').then((response) => {
		console.log(response.data)
		commit('setLocations', response.data.data)
		return Promise.resolve()
	})
}

export const postLocation = ({ commit, dispatch, rootState}, item) => {
	var URL = "api/v1/admin/user/location-settings"
	return axios.post(URL, item).then((response) => {
		dispatch('getLocations')
		return Promise.resolve()
	})
}