import { LocalStorage } from 'quasar'
import localforage from 'localforage';
import { localForageService } from '../dispatchApi/localForageService'

export default{
	orders: process.env.MODE != 'ssr' ? localForageService.getItem('orders') : [],
	receiptOrderNumber: LocalStorage.getItem('receiptOrderNumber') ? JSON.parse(LocalStorage.getItem('receiptOrderNumber')) : 0,
	orderDetails:null,
	onlineOrderDetails:null,
	transaction: LocalStorage.getItem('transaction') ? JSON.parse(LocalStorage.getItem('transaction')) : null,
	paymentDetails:[],
	paymentTimeout :null,
	userDiscountPrivilege: null,
	usersWithDiscountPrivilege: [],
	editPrivilege: null,
	deletePrivilege: null,
	usersWithRights: null,
	freeWash: null,
	amountDiscount : 0,
}