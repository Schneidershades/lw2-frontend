import axios from 'axios'


export const getLocationUsers = ({ commit }, item) => {
	var URL = "api/v1/admin/user/location-users/"+ item
	return axios.get(URL).then((response) => {
		commit('setLocationUsers', response.data.data)
		return Promise.resolve()
	})
}

export const currentUser = ({ commit, dispatch }, payload) => {
	commit('currentUser', payload)
}

export const updateUser = ({ commit, dispatch }, payload) => {
	var url = 'api/v1/admin/user/location-users/' + payload
	return axios.put(url, credentials).then((response) => {
		return Promise.resolve()
	})
}

export const deleteUser = ({ commit, dispatch }, item) => {
	var url = 'api/v1/admin/user/location-users/' + item
	return axios.delete(url, credentials).then((response) => {
		dispatch('getStaff')
		return Promise.resolve()
	})
}
