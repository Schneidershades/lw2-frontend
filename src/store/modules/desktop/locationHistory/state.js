import { LocalStorage } from 'quasar'

export default{
	history:[],
	userDetails: LocalStorage.getItem('user') ? JSON.parse(LocalStorage.getItem('user')) : null
}