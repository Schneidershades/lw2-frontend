import localforage from 'localforage';
import { LocalStorage } from 'quasar'

export default{
	plate_numbers: process.env.MODE != 'ssr' ? localforage.getItem('plate_numbers') : [],
	plate_number: LocalStorage.getItem('plate_number') != null  ? JSON.parse(LocalStorage.getItem('plate_number')) : null,
	freeWash: null,
	useFreeWash: false,
}