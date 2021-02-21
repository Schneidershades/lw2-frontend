import axios from 'axios'

// get products
export const getPersonnelRequests = ({ commit, rootState }, item) => {
	var URL = 'api/v1/admin/user/location-personnel-requests/' + item
	return axios.get(URL).then((response) => {
		console.log(response.data)
		commit('setPersonnelRequests', response.data.data)
		return Promise.resolve()
	})
}

export const sendPersonnelRequest = ({ commit, dispatch, rootState }, information) => {
	var URL = 'api/v1/admin/user/personnel-requests'
	return axios.post(URL, information).then((response) => {
		dispatch('getPersonnelRequests', information.location_id)
		return Promise.resolve()
	})
}
