export const setOrderDetails = (state, order) =>{
	state.orderDetails = order
	state.onlineOrderDetails = null
}

export const setOrders = (state, order) =>{
	state.orders = order
}

export const setPaymentDetails = (state, details) =>{
	state.paymentDetails = details
}

export const setPaymentTimeout = (state, { callback, delay }) =>{
	state.paymentTimeout = setTimeout(callback, delay)
}

export const stopPaymentTimeout = (state) =>{
	clearInterval(state.setTimeout)
	state.paymentTimeout = null
}

export const updateTransaction = (state, order) =>{
	state.transaction = order
	state.orders.push(state.transaction)
}

export const setOrder = (state, order) =>{
	state.orders.push(order)
}

export const setCurrentOrders = (state, orders) =>{
	state.orders = orders
}

export const setNewOrderNumber = (state, no) =>{
	state.receiptOrderNumber = no
}

export const clearOrder = (state) =>{
	state.transaction = null
}

export const setOnlineOrderDetails = (state, order) =>{
	state.orderDetails = null
	state.onlineOrderDetails = order
}




export const setUpdateOrderDetails = (state, order) =>{
	
	var item = state.orders.find(item => item.receipt_number === order.orderDetails.receipt_number)

	if(order.action == 'complete'){
		item.status = 'complete'
		if(order.payment_method!=null){
			item.payment_method = order.payment_method
		}
		
	}

	if(order.action == 'edit'){
		item.status = 'edit'
		item.reason = order.reason
		if(order.payment_method!=null){
			item.payment_method = order.payment_method
		}
	}

	if(order.action == 'delete'){
		item.status = 'delete'
		item.reason = order.reason
		if(order.payment_method!=null){
			item.payment_method = order.payment_method
		}
	}
}

export const setUsersWithRight = (state, data) => {
	state.usersWithRights = data
	return 
}

export const setCurrentUserEditRight = (state, data) => {
	state.editPrivilege = data
	return 
}

export const setCurrentUserDeleteRight = (state, data) => {
	state.deletePrivilege = data
	return 
}

export const setSignedInaUserWithEditPrivilege = (state, data) =>{
	state.editPrivilege = data
	return 
}

export const setSignedInaUserWithDeletePrivilege = (state, data) => {
	state.deletePrivilege = data
	return 
}