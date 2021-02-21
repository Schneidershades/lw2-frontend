import axios from 'axios'

export const getLocationEmployees = ({ commit }, id) => {
	var url = 'api/v1/admin/user/location-employees/' + id
	return axios.get(url).then((response) => {
		console.log(response.data)
		commit('setEmployees', response.data.data)
		return Promise.resolve()
	})
}

export const sendLocation = ({ commit }, id) => {
	commit('sendLocation', id)
}


export const getAllEmployees = ({ commit }) => {
	return axios.get('api/v1/admin/user/employees').then((response) => {
		console.log(response.data)
		commit('setEmployees', response.data.data)
		return Promise.resolve()
	})
}

export const postEmployee = ({ commit, dispatch }, credentials) => {
	return axios.post('api/v1/admin/user/employees', credentials).then((response) => {
		return Promise.resolve()
	})
}

export const deleteEmployee = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/employees/' + credentials.id
	return axios.delete(url, credentials).then((response) => {
		return Promise.resolve()
	})
}


export const selectEmployee = ({ commit }, payload) => {
	commit('setSelectedEmployee', payload)
	return Promise.resolve()
}

export const updateEmployee = ({ commit, dispatch }, credentials) => {
	var url = 'api/v1/admin/user/employees/' + credentials.id
	return axios.put(url, credentials).then((response) => {
		return Promise.resolve()
	})
}

export const getEmployeeLoansAndOutstandings = ({ commit, dispatch }, payload) => {
	return axios.get('api/v1/admin/user/employee-loans-and-outstanding/' + payload.id).then((response) => {
		commit('setEmployeeLoansAndOutstanding', response.data.data)
		return Promise.resolve()
	})
}

export const postEmployeeLoansAndOutstandings = ({ commit, dispatch }, payload) => {
	return axios.post('api/v1/admin/user/employee-loans-and-outstanding', payload).then((response) => {
		console.log(payload.expense_orderable_id)
		dispatch('getEmployeeLoansAndOutstandings', { id: payload.expense_orderable_id })
		return Promise.resolve()
	})
}

export const getEmployeePenaltiesAndDeductions = ({ commit, dispatch }, payload) => {
	return axios.get('api/v1/admin/user/employee-penalties-and-deductions/' + payload.id).then((response) => {
		commit('setEmployeePenaltiesAndDeductions', response.data.data)
		return Promise.resolve()
	})
}

export const postEmployeePenaltiesAndDeductions = ({ commit, dispatch }, payload) => {
	return axios.post('api/v1/admin/user/employee-penalties-and-deductions', payload).then((response) => {
		dispatch('getEmployeePenaltiesAndDeductions', { id: payload.expense_orderable_id })
		return Promise.resolve()
	})
}

// 
export const getEmployeeGuarantors = ({ commit, dispatch }, payload) => {
	return axios.get('api/v1/admin/user/guarantors').then((response) => {
		commit('setEmployeeGuarantors', response.data.data)
		return Promise.resolve()
	})
}

export const getLocationEmployeeGuarantors = ({ commit, dispatch }, payload) => {
	return axios.get('api/v1/admin/user/guarantors/' + payload.id).then((response) => {
		commit('setEmployeeGuarantors', response.data.data)
		return Promise.resolve()
	})
}

export const postEmployeeGuarantor = ({ commit, dispatch }, payload) => {
	return axios.post('api/v1/admin/user/guarantors', payload).then((response) => {
		console.log(payload.expense_orderable_id)
		dispatch('getLocationEmployeeGuarantors', { id: payload.expense_orderable_id })
		return Promise.resolve()
	})
}



