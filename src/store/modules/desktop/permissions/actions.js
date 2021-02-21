import axios from 'axios'
import { localForageService } from '../dispatchApi/localForageService'
import { LocalStorage } from 'quasar'

// get products
export const getPlateNumbers = ({ commit, rootState }) => {
	return axios.get('api/v1/admin/user/customers-plate-numbers').then((response) => {
		console.log(response.data.data)
		commit('setPlateNumbers', response.data)
		return Promise.resolve()
	}).catch((error) => {
		if (!error.response) {
    		return dispatch('internetStatus/setConnection', false, {root:true})
        }
  		return Promise.reject()
  	})
}

export const checkPlateNumber = ({state, commit }, plate_number) =>{
	commit('setPlateNumber', plate_number)
	LocalStorage.set('plate_number', JSON.stringify(state.plate_number))

}

export const updateCustomer = async ({state, commit }, items) =>{
	commit('updatePlateNumber', items)
	LocalStorage.set('plate_number', JSON.stringify(state.plate_number))
}

export const removeCurrentPlateNumberFromLocalStorage = ({ commit } ) =>{
	commit('clearPlateNumber')
	LocalStorage.set('plate_number', null)
}

