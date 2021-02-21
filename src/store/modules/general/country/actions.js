import axios from 'axios'

// get products
export const getCountries = ({ commit }) => {
	return axios.get('api/v1/location/country').then((response) => {
		// console.log(response.data)
		commit('setCountries', response.data.data)
		return Promise.resolve()
	})
}
