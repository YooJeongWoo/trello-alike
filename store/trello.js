/* eslint-disable no-console */
export const state = () => ({
  boardData: []
})

export const mutations = {
  setBoardData(state, payload) {
    state.boardData = payload
  }
}

export const getters = {
  boardData(state) {
    return state.boardData
  }
}

export const actions = {
  fetchBoardDataFromLocalStorage({ commit }) {
    const data = localStorage.getItem('boardData')
    if (data) {
      try {
        commit('setBoardData', JSON.parse(data))
      } catch (error) {
        console.warn(error)
      }
    }
  }
}
