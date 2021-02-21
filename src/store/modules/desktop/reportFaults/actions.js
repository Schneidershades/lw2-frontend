import axios from 'axios'

// get products
export const getReportFaults = ({ commit, rootState }, item) => {
	var URL = 'api/v1/admin/user/location-report-faults/' + item
	return axios.get(URL).then((response) => {
		commit('setReportFaults', response.data.data)
		return Promise.resolve()
	})
}

export const sendReportFaults = ({ commit, dispatch, rootState }, information) => {
	var URL = 'api/v1/admin/user/report-faults'
	return axios.post(URL, information).then((response) => {
		dispatch('getReportFaults', information.location_id)
		return Promise.resolve()
	})
}