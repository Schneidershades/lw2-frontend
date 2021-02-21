export default function auth({ next, store }){

	if(store.state.auth.user == null && process.env.MODE == 'ssr'){
		return next({
			name: 'home'
		})
	}
	
	if(store.state.auth.user.role == 'user'){
		return next({
			name: 'userDashboard'
		})
	}

	return next()
}