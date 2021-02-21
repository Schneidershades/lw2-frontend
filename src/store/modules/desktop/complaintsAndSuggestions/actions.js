import axios from 'axios'

// get products
// export const getComplaintsAndSuggestions = ({ commit }) => {
// 	var URL = 'api/v1/admin/user/location-complaints-suggestions/' + item
// 	return axios.get(URL).then((response) => {
// 		commit('setComplaintsAndSuggestions', response.data.data)
// 		return Promise.resolve()
// 	})
// }

export const getLocationComplaintsAndSuggestions = ({ commit }, item) => {
	var URL = 'api/v1/admin/user/location-complaints-suggestions/'+ item
	return axios.get(URL).then((response) => {
		commit('setComplaintsAndSuggestions', response.data.data)
		return Promise.resolve()
	})
}

export const sendComplaintsAndSuggestion = ({ commit, dispatch }, information) => {
	var URL = 'api/v1/admin/user/complaints-suggestions'
	return axios.post(URL, information).then((response) => {
		dispatch('getLocationComplaintsAndSuggestions', information.location_id)
		return Promise.resolve()
	})
}