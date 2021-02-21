import axios from 'axios'

export const getRoles = ({ commit, dispatch, root }, item) => {
	var URL = "api/v1/admin/user/roles"
	return axios.get(URL).then((response) => {
		commit('setRoles', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const getPermissions = ({ commit, dispatch, root }, item) => {
	var URL = "api/v1/admin/user/permissions"
	return axios.get(URL).then((response) => {
		commit('setPermissions', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const sendRolesPermissions = ({ commit, dispatch, rootState}, item) => {
	var URL = "api/v1/admin/user/roles-permissions"
	var transactions = {
		"contentRolesPermissions": item
	}

	return axios.post(URL, transactions).then((response) => {
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		dispatch('getRoles')
		dispatch('getPermissions')
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const saveRole = ({ commit, dispatch, rootState}, item) => {
	var URL = "api/v1/admin/user/roles"
	console.log(item)
	return axios.post(URL, item).then((response) => {
		dispatch('auth/attempt', rootState.auth.token, { root: true })
		dispatch('getRoles')
		dispatch('getPermissions')
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}