// set product
export const setProducts = (state, products) =>{
	state.products = products
}

export const setCart = (state, products) =>{
	state.cart = products
}

export const appendToCart = (state, products) => {
	console.log(products.items)

	var items = products.items

	items.map(function(value, key) {
     	// console.log(value);
     	const existing = state.cart.find((item)=>{
			// console.log(item.id)
			return item.id === value.id.id
		})

		if(existing){
			var quan = existing.quantity++

			existing.total += parseInt(existing.amount)
		}else{
			console.log(value.id.id)
			var product = value.id

			console.log(product)
			var item = {
				id: product.id, 
				package: product.package, 
				venue: product.venue, 
				vehicle : product.vehicle, 
				services : [], 
				amount : parseInt(product.amount), 
				quantity : 1,
				total : parseInt(product.amount)
			}

			state.cart.push(item)
		}
   	})
}

export const updateToCart = (state, products) => {
	// console.log(products.items)

	var items = products.items
	items.map(function(value, key) {
     	const existing = state.cart.find((item)=>{
			return item.id === value.id.id
		})
		if(existing){
			var quan = value.quantity
			existing.total = parseInt(existing.amount * value.quantity)
		}
   	})
}


// set cart
// clear cart
// remove from cart
export const removeFromCart = (state, productId) => {
	const existing = state.cart.find((item)=>{
		return item.id === productId
	})

	state.cart = state.cart.filter((item) => {
		return item.id !== productId
	})

	// if(existing.quantity > 1){
	// 	existing.quantity--
	// }else{
		
	// }
}

// append to cart
export const clearCart = (state) =>{
	state.cart = []
}

export const updateCouponData = (state, data) => {
	var data = data.data

	state.discountDetails = null
	
	state.couponDetails = data
	
	if(data.percentageDiscount != null && data.percentageDiscount > 0){
		state.percentageDiscount = data.percentageDiscount
		state.amountDiscount = 0
		return
	}

	if(data.amountDiscount != null && data.amountDiscount > 0){
		state.amountDiscount = data.amountDiscount
		state.percentageDiscount = 0
		return 
	}
}

export const updateDiscountData = (state, data) => {
	var data = data.data

	state.couponDetails = null

	state.discountDetails = data
	
	if(data.percentageDiscount != null && data.percentageDiscount > 0){
		state.percentageDiscount = data.percentageDiscount
		state.amountDiscount = 0
		return
	}

	if(data.amountDiscount != null && data.amountDiscount > 0){
		state.amountDiscount = data.amountDiscount
		state.percentageDiscount = 0
		return 
	}
}

export const applyResetDiscountData = (state) => {
	state.discountDetails = null
	state.couponDetails = null
	state.percentageDiscount = 0
	state.amountDiscount = 0

	return 
}



export const setUsersWithDiscountPrivilege = (state, data) => {
	state.usersWithDiscountPrivilege = data
	return 
}


export const setSignedInaUserWithDiscountPrivilege = (state, data) => {
	state.userDiscountPrivilege = data
	return 
}

export const setDefaultDiscountToZeroOnLocationManagerApp = (state) => {
	state.discountDetails = []
	state.percentageDiscount = 0
	state.amountDiscount = 0

	return 
}

export const setDefaultDiscountOnWeb = (state, data) => {
	state.discountDetails = []
	state.percentageDiscount = data ? data : 0

	return 
}

export const setUserDiscountPrivilege = (state, data) => {
	state.userDiscountPrivilege = data
	return 
}
