import { LocalStorage } from 'quasar'
import localforage from 'localforage';
import { localForageService } from '../dispatchApi/localForageService'

export default{
	transactions: null,
	transactionDetails: null,
	onlineBooking: process.env.MODE != 'ssr' ? localForageService.getItem('onlineBookings') : [],
	amountDiscount : 0,
}