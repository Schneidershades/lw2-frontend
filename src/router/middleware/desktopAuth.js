export default function auth({ next, store }){
 	if(store.state.auth.user == null){
		return next({
			name: 'adminLogin'
		})
	}

	return next()
}