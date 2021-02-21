export default function auth({ next, store }){
 	if(store.getters["auth/user"] != null){
		return next({
			name: 'adminLogin'
		})
	}

	return next()
}