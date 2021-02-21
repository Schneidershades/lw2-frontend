import store from 'app/src/store/index'
import axios from 'axios'
import { LocalStorage } from 'quasar'
import { localForageService } from './localForageService'

store.subscribe((mutation)=>{
	// console.log(mutation)
	switch (mutation.type){
		case 'auth/SET_TOKEN': 
		// console.log(mutation.payload)
		if (mutation.payload){
			axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
			LocalStorage.set('token', mutation.payload)
			// localForageService.setItem('hie4', mutation.payload)
		}else{
			axios.defaults.headers.common['Authorization'] = null
		}
		break;
	}
})

