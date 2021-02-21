import axios from 'axios'

export const getAccountClassification = ({ commit, rootState }) => {
	var URL = "api/v1/admin/user/account-classification"
	return axios.get(URL).then((response) => {
		commit('setAccountClassification', response.data.data)
		return Promise.resolve()
	})
}

export const sendAccountClassification = ({ commit, dispatch }, information) => {
	var URL = 'api/v1/admin/user/account-classification'
	return axios.post(URL, information).then((response) => {
		console.log(response.data)
		dispatch('getAccountClassification')
		return Promise.resolve()
	})
}

export const selectClassification = ({ commit }, vehicle) => {
	commit('setSelectedClassification', vehicle)
	return Promise.resolve()
}

export const updateClassification = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/account-classification/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		console.log(response.data)
		dispatch('getAccountClassification')
		return Promise.resolve()
	})
}

export const deleteClassification = async ({ commit, dispatch }, id) => {
	var url = 'api/v1/admin/user/account-classification/' + id
	await axios.delete(url).then((response) => {
		console.log(response.data.data)
		dispatch('getAccountClassification')
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}