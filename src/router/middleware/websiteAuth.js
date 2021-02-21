export default function websiteAuth({ next, store }){

 	if(store.state.auth.user == null && process.env.MODE == 'ssr'){
		return next({
			name: 'home'
		})
	}

	return next()
}