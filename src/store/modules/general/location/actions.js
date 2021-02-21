import axios from 'axios'

export const getLocations = ({ commit }) => {
	return axios.get('api/v1/data-locations').then((response) => {
		console.log(response.data)
		commit('setLocations', response.data)
		return Promise.resolve()
	})
}

export const getHomeServiceLocations = ({ commit, dispatch }) => {
	return axios.get('api/v1/data-home-service-locations').then((response) => {
		console.log(response.data)
		dispatch('shopping/removeAllProductFromCart', null, { root: true })
		dispatch('shopping/removeAllProductFromCartLocalStorage', null, { root: true })
		commit('setHomeServiceLocations', response.data)
		return Promise.resolve()
	})
}