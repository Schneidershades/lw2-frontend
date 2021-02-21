import axios from 'axios'

export const selectedClass = ({ commit }, payload) => {
  commit('setSelectedClass', payload)
  return Promise.resolve()
}

export const startQuizSession = ({ commit, dispatch }, payload) => {
  axios.post('api/v1/quiz/start', payload).then(response => {
    commit('setSession', response.data.data)
    dispatch('quizQuestion', { class_schedule_id: response.data.data.class_schedule_id, quiz_session_id: response.data.data.id})
    return Promise.resolve()
  })
}

export const quizQuestion = ({ commit }, payload) => {
  axios.post('api/v1/quiz/question', payload).then(response => {
    console.log(response.data.data)
    commit('setQuestion', response.data.data)
    return Promise.resolve()
  })
}

export const quizAnswer = ({ commit }, payload) => {
  axios.post('api/v1/quiz/answer', payload).then(response => {
    commit('setQuestion', null)
    console.log(response.data.data)
    return Promise.resolve()
  })
}

export const quizScores = ({ commit }, payload) => {
  let URL = 'api/v1/quiz/scores/' + payload
  axios.get(URL, payload).then(response => {
    console.log(response.data.data)
    commit('setScores', response.data.data)
    return Promise.resolve()
  })
}

// export const quizAnswer = payload => axios.post('api/v1/quiz/answer', payload)
