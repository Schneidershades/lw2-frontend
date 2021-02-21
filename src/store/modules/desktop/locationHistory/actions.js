import axios from 'axios'
import { localForageService } from '../dispatchApi/localForageService'
import { LocalStorage } from 'quasar'

export const getLocationHistory = ({state, commit, rootState }) => {
	let user = JSON.parse(LocalStorage.getItem('user'))

	// store notes
	if(!user){
		return console.log('user location not found')
	}
	
	return axios.get('api/v1/admin/user/location-history/' + user.location.id).then((response) => {
		console.log(response.data.data)
		commit('setLocationHistory', response.data.data)
        localForageService.setItem('history', response.data.data)
		return Promise.resolve()
	})
}
