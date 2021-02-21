// products
export const products = (state) => {
	return state.products
}

export const cart = (state) =>{
	return state.cart
}

export const cartItemCount = (state)=>{
	return state.cart.length
}

export const cartTotal = (state) => {
	const barArray = [];
	var arraySum = state.cart.reduce((a, b) => {
		// console.log(b.total)
		
		return a + b.total 

	}, 0).toFixed(2)

	// console.log(state.percentageDiscount, state.amountDiscount)

	if(state.percentageDiscount > 0 && state.percentageDiscount != null){
		var discount = state.percentageDiscount / 100
		var discountPrice =  arraySum  * discount
		var sub = arraySum
		return sub - discountPrice 
	}



	if(state.amountDiscount > 0 && state.amountDiscount != null){
		var discountPrice = state.amountDiscount
		var sub = arraySum 
		return sub - discountPrice 
	}

	return arraySum
}



export const subTotal = (state) => {
	console.log(state)
	return state.cart.reduce((a, b) => {
		// console.log(b.total)
		return a + b.total

		// return a + b.product.amount * b.quantity
	}, 0).toFixed(2)
}



export const discount = (state) =>{
	if(state.percentageDiscount > 0){
		return state.percentageDiscount + '% discount applied'
	}

	if(state.amountDiscount > 0){
		return '₦' +  state.amountDiscount + ' discount applied'
	}
}

export const couponInformation = () =>{
	return state.couponDetails
}



export const productTotal = (state) => {
	return state.cart.reduce((a, b) => {
		return b.product.amount  * b.quantity
	}, 0).toFixed(2)
}

export const packageLocationCount = (state) =>{
	var cart = state.cart
	var count = cart.filter((obj) => obj.venue === 'parkit-location').length
	// console.log(count)
	return count
}

export const packageHomeOfficeCount = (state) =>{
	var cart = state.cart
	var count = cart.filter((obj) => obj.venue === 'home-office').length
	// console.log(count)
	return count
}

export const userDiscountPrivilege = (state) =>{
	return state.userDiscountPrivilege
}


export const usersWithDiscountPrivilege = (state) =>{
	return state.usersWithDiscountPrivilege
}

export const discountDetails = (state) =>{
	return state.discountDetails
}

export const couponDetails = (state) =>{
	return state.couponDetails
}