export const setQuestion = (state, payload) => {
  state.quiz = payload
}

export const setSession = (state, payload) => {
  state.session = payload.id
  state.classSchedule = payload.class_schedule_id
}

export const setSessionClear = (state, payload) => {
  state.session = null
  state.classSchedule = null
}

export const setScores = (state, payload) => {
  state.scores = payload
}