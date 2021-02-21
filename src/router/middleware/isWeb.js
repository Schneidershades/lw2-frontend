export default function auth({ next }){

	if(process.env.MODE != 'ssr'){
		return next({
			name: 'adminLogin'
		})
	}

	
	return next()
}

