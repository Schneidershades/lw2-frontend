export const flashMessage = ({commit}, message) =>{
	console.log(message, 0)
	commit('setMessage', message)

	setTimeout(() => {
		commit('clearMessage')
	}, 10000)
}

export const flashErrorMessage = ({commit}, errors) =>{
	commit('setErrorMessage', errors)

	setTimeout(() => {
		commit('clearErrorMessage')
	}, 10000)
}