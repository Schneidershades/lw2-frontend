import Vue from 'vue'
import axios from 'axios'
import App from 'app/src/App.vue'
import { LocalStorage, SessionStorage } from 'quasar'

export default async ({ app, router, store, Vue }) => {
  	// something to do
  	axios.defaults.withCredentials = true
  	// axios.defaults.baseURL = 'https://api.parkit.ng'
  	axios.defaults.baseURL = 'http://localhost:8000/'
  	try{
  		if(process.env.MODE != 'ssr'){
  		}
		await store.dispatch('auth/attempt', LocalStorage.getItem('token')).then(() => {
			new Vue({
				router,
				store,
				render: h => h(App)
			}).$mount('#q-app')
		})
	}catch (e){
		console.log('Welcome to parkit')
	}
	
}


