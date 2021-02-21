import axios from 'axios'

export const selectedClass = ({ commit }, payload) => {
  commit('setSelectedClass', payload)
  return Promise.resolve()
}

export const getClasses = ({ commit }) => {
  axios.get('api/v1/class').then(response => {
    commit('setClasses', response.data.data)
    return Promise.resolve()
  })
}
