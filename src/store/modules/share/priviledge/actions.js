import axios from 'axios'


export const sendReport = ({ commit, dispatch, rootState}, item) => {
	var URL = "api/v1/admin/user/send-order-report-transactions"
	
	return axios.post(URL, item).then((response) => {
		// dispatch('auth/attempt', rootState.auth.token, { root: true })
		return Promise.resolve()
	})
}