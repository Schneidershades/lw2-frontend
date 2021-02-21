import axios from 'axios'

export const getLocations = ({ commit }) => {
	return axios.get('api/v1/admin/user/location-settings').then((response) => {
		console.log(response.data)
		commit('setLocations', response.data)
		return Promise.resolve()
	})
}