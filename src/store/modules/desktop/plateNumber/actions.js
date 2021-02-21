import axios from 'axios'

// get products
export const getPlateNumbers = async ({ commit }, plate) => {
	var plateURL = 'api/v1/admin/user/customers-plate-numbers'
	await axios.get(plateURL).then((response) => {
		console.log(response.data.data)
		commit('setPlateNumbers', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}

// get products
export const getPlateNumber = async ({ commit }, plate) => {
	var plateURL = 'api/v1/admin/user/customer/plate_number/' + plate
	await axios.get(plateURL).then((response) => {
		console.log(response.data.data)
		commit('setPlateNumber', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}

export const getLocationPlateNumber = async ({ commit }, id) => {
	var plateURL = 'api/v1/admin/user/location-platenumbers/' + id
	await axios.get(plateURL).then((response) => {
		console.log(response.data.data)
		commit('setPlateNumbers', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}

export const updateCustomer = async ({ commit }, items) =>{
	// console.log(items)
	await axios.put('api/v1/admin/user/customer/plate_number/0 ', items).then((response) => {
		console.log(response.data.data)
		commit('setPlateNumber', response.data.data)
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}

export const deletePlateNumber = async ({ commit, dispatch }, plate) => {
	var plateURL = 'api/v1/admin/user/customers-plate-numbers/' + plate
	await axios.delete(plateURL).then((response) => {
		console.log(response.data.data)
		dispatch('getPlateNumbers')
		return Promise.resolve()
	}).catch((error) => {
		console.log(error.response.data)
        return Promise.reject()
    }) 
}