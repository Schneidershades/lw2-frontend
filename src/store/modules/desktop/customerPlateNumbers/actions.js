import axios from 'axios'
import { localForageService } from '../dispatchApi/localForageService'
import { LocalStorage } from 'quasar'
const isOnline = require('is-online');

// get products
export const getPlateNumbers = ({ commit, rootState }) => {
	return axios.get('api/v1/admin/user/customers-plate-numbers').then((response) => {
		console.log(response.data.data)
		commit('setPlateNumbers', response.data)
		return Promise.resolve()
	})
}

export const checkPlateNumber = ({state, commit, dispatch, rootState }, plate_number) =>{
	commit('setPlateNumber', plate_number)
	LocalStorage.set('plate_number', JSON.stringify(state.plate_number))
	dispatch('checkFreeWash')
}

export const checkFreeWash = async ({state, commit, dispatch }) =>{

	if(state.freeWash==true){

		// var free = {data: {id: "free", percentageDiscount: "100", amountDiscount: 0}}

		// dispatch('adminShopping/removeAllProductFromCartLocalStorage', null , { root: true })
		// commit('adminShopping/updateDiscountData', free , { root: true })
	}else{
		// commit('adminShopping/applyResetDiscountData', null, { root: true })
	}
}

export const updateCustomer = async ({state, commit, dispatch }, items) =>{
	commit('updatePlateNumber', items)
	LocalStorage.set('plate_number', JSON.stringify(state.plate_number))
	dispatch('checkFreeWash')
}

export const removeCurrentPlateNumberFromLocalStorage = ({ commit } ) =>{
	commit('clearPlateNumber')
	LocalStorage.set('plate_number', null)
}


export const useFreeWash = ({ commit,  dispatch, rootState }, item) =>{
	commit('setFreeWashStatus', item)

	var free = {data: {id: "free", percentageDiscount: "100", amountDiscount: 0}}

	if(item=='yes'){
		dispatch('adminShopping/removeAllProductFromCartLocalStorage', null , { root: true })
		commit('adminShopping/updateDiscountData', free , { root: true })
	}else{
		commit('adminShopping/applyResetDiscountData', null, { root: true })
	}
}

