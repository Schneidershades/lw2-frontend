import localforage from 'localforage';
import localforageGetItems from 'localforage-getitems'

export default async ({ app, router, store, Vue }) => {
  console.log(process.env.MODE)

  if(process.env.MODE != 'ssr'){

    const localForageService = localforage.createInstance({
      name: "mydatabase",
      version : 1.0,
      storeName : 'mystorageobj'
    });

    localForageService.setDriver([
      localforage.INDEXEDDB,
    ])
    .then(() => {
      console.log('good localstorage setup')
    })
    .catch(error => {
      console.log('bad localstorage setup')
    });
  }
}
