export const setEmployees = (state, payload) =>{
	state.employees = payload
}

export const setSelectedEmployee = (state, payload) =>{
	state.selectedEmployee = payload
}

export const setEmployeeLoansAndOutstanding = (state, payload) =>{
	state.loansAndOutstandings = payload
}

export const setEmployeePenaltiesAndDeductions = (state, payload) =>{
	state.penaltiesAndDeductions = payload
}

export const setEmployeeGuarantors = (state, payload) =>{
	state.guarantors = payload
}

export const sendLocation = (state, payload) =>{
	state.stampLocation = payload
}

