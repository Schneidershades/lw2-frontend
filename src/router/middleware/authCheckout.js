export default function checkout({ next, store }){
	if(store.state.auth.user != null){
		return next({
			name: 'userCart'
		})
	}
	return next()
}