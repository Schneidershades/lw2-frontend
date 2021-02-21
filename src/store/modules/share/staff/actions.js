import axios from 'axios'

export const getStaff = ({ commit }) => {
	return axios.get('api/v1/admin/user/staff-users').then((response) => {
		commit('setStaff', response.data.data)
		return Promise.resolve()
	})
}

export const postStaff = ({ commit, dispatch, rootState }, credentials) => {
	return axios.post('api/v1/admin/user/staff-users', credentials).then((response) => {
		dispatch('getStaff')
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		return Promise.resolve()
	})
}

export const selectStaff = ({ commit }, payload) => {
	commit('setSelectedStaff', payload)
	return Promise.resolve()
}

export const updateStaff = ({ commit, dispatch, rootState }, credentials) => {
	var url = 'api/v1/admin/user/staff-users/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		dispatch('getStaff')
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		return Promise.resolve()
	})
}

export const deleteStaff = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/staff-users/' + credentials.id
	return axios.delete(url, credentials).then((response) => {
		dispatch('getStaff')
		return Promise.resolve()
	})
}
