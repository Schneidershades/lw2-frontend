import axios from 'axios'

export const getVehicles = ({ commit }) => {
	return axios.get('api/v1/admin/user/vehicle-settings').then((response) => {
		commit('setVehicles', response.data.data)
		return Promise.resolve()
	})
}

export const getLocationVehicles = ({ commit }, id) => {
	return axios.get('api/v1/admin/user/vehicle-settings/' + id).then((response) => {
		commit('setVehicles', response.data.data)
		return Promise.resolve()
	})
}

export const selectVehicle = ({ commit }, vehicle) => {
	commit('setSelectedVehicle', vehicle)
	return Promise.resolve()
}

export const updateVehicle = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/vehicle-settings/' + credentials.id

	return axios.put(url, credentials).then((response) => {
		console.log(response.data)
		dispatch('getVehicles')
		return Promise.resolve()
	})
}

export const postVehicle = ({ commit }, credentials) => {
	return axios.post('api/v1/admin/user/vehicle-settings', credentials, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((response) => {
			console.log(response.data)

			dispatch('getVehicles')
			return Promise.resolve()
	})
}