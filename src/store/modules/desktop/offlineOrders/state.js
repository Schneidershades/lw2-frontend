import { localForageService } from '../dispatchApi/localForageService'

export default{
	orders: process.env.MODE != 'ssr' ? localForageService.getItem('orders') : [],
	order: null,
}