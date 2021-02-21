import { Platform } from 'quasar'
import { LocalStorage } from 'quasar'
import { localForageService } from '../dispatchApi/localForageService'

export default{
	products: process.env.MODE != 'ssr' ? localForageService.getItem('products') : [],
	offlinePackages: [],
	cart: LocalStorage.getItem('cart') ? JSON.parse(LocalStorage.getItem('cart')) : [],
	percentageDiscount : 0,
	amountDiscount : 0,
	couponDetails: null,
	discountDetails: null,
	setUserEditPrivilege: null,
	setUserDeletePrivilege: null,
	usersWithDiscountPrivilege: null,
	userDiscountPrivilege: null,
}