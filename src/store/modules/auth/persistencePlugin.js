// import whatever u need from your 'statemapper'... this is just an example.
import { setPersistedState } from './statemapper'; 
import store from 'app/src/store/index'
import axios from 'axios'
import { LocalStorage } from 'quasar'
import { localForageService } from './localForageService'

//decide which mutations you want to listen in on, for persisting app data


const testOffline = async () => {
  axios.defaults.baseURL = 'http://localhost:8000/'
  // axios.defaults.baseURL = 'https://api.parkit.ng/'
}
// async function returns a promise
testOffline()
  .then(() => {
    console.log('fetched online data')
})



const mutationsOfInterest = [
];

const ofInterest = (mutation) => {
  return mutationsOfInterest.includes(mutation);
};


store.subscribe((mutation, state) => {
  if (ofInterest(mutation.type)) {
    console.log(mutation.type)
    // handover to relevant get/set mappings. straightfwd example would be:
    setPersistedState(state); 
  }else{
    // console.log('lond')
  }
});

