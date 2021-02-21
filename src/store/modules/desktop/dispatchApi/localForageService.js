import localforage from 'localforage';
import localforageGetItems from 'localforage-getitems'

export const localForageService = localforage.createInstance({
  name: "mydatabase",
  version : 1.0,
  storeName : 'mystorageobj'
});

if(process.env.MODE != 'ssr'){
  localForageService.setDriver([
    localforage.INDEXEDDB,
  ]).then(() => {
    console.log('localstorage successful')
  })
  .catch(error => {
    console.log('localstorage failed')
  });
}

export default {
  localForageService,
}