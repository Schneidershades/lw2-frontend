import Vue from 'vue'
import { Can, abilitiesPlugin } from '@casl/vue'
import { defineAbility } from '@casl/ability'
import store from 'app/src/store/index'
import axios from 'axios'

Vue.component('Can', Can)

store.watch(
    (state, getters) => getters['auth/user'],
    isAuth => {


      	if (isAuth) {
			const testOffline = async () => {
			}

			// async function returns a promise
			testOffline().then(() => {
				console.log('AUTHENTICATED ACTIONS')
			})

         	var user = store.getters['auth/user']

			if(user.permissions){
         		let abilities =  defineAbility((can, cannot) => {
					user.permissions.forEach((permission)=>{
						can(...permission)
					})
				})

				Vue.use(abilitiesPlugin, abilities)
         	}
      	}else{
      		console.log('niwnieowwone')
      	}
    }
)