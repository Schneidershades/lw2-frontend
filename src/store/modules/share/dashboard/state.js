import { LocalStorage } from 'quasar'

export default{
	dashboard: LocalStorage.getItem('locationDashboard') ? 
			JSON.parse(LocalStorage.getItem('locationDashboard')) :
			[],
	locationStats: LocalStorage.getItem('locationStats') ? 
			JSON.parse(LocalStorage.getItem('locationStats')) :
			[],
}