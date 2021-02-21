import { date } from 'quasar'

export const orderDetails = (state) => {
	return state.orderDetails
}

export const onlineOrderDetails = (state) => {
	return state.onlineOrderDetails
}



export const orders = (state) => {

	if(state.orders.length > 0){
		return state.orders
	}
	return []
}

export const paymentDetails = (state) => {
	return state.paymentDetails
}

export const paymentTimeout = (state) => {
	return state.paymentTimeout 
}

// products
export const receiptNumber = (state) => {
	return state.receiptOrderNumber
}

export const editPrivilege = (state) => {
	return state.editPrivilege 
}

export const deletePrivilege = (state) => {
	return state.deletePrivilege 
}

export const usersWithRights = (state) => {
	return state.usersWithRights 
}

export const transaction = (state) => {
	return state.transaction 
}

export const totalTransaction = (state) => {
	if(!state.orders){
		return null
	}
	return state.orders.reduce(function(total, item){
	    return parseInt(total) + parseInt(item.total); 
	},0);	
}

export const totalTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// // console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'complete' || x.status == 'pending' || x.status == 'processing' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const posTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// // console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.payment_method == 'pos' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const cashTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.payment_method == 'cash' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const completeTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'complete' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const pendingTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'pending' || x.status == 'processing' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const editTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'edit' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const deleteTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'delete' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const notPaidTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.payment_method == 'not_paid' && x.date == formattedString)


	var arraySum = orders.reduce((a, b) => {
		// console.log(b.total)
		return parseInt(a) + parseInt(b.total)

	}, 0)

	return arraySum	
}

export const carTransactionToday = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	// console.log(timeStamp)
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

	var orders = state.orders.filter(x => x.status == 'complete' && x.date == formattedString)

	return orders.length	
}

export const totalTransactionThisMonth = (state) => {
	if(!state.orders.length > 0){
		return null
	}
	var today = new Date();
	var bu = today.getDate();
	var timeStamp = Date.now()
	var formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
	return state.orders.reduce(function(total, item){
		if(item.date == formattedString){
			return parseInt(total) + parseInt(item.total); 
		}
	    
	},0);	
}
