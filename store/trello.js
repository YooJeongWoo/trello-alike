/* eslint-disable no-console */

const defaultBoardData = [
  {
    columnName: 'A',
    columnItems: []
  },
  {
    columnName: 'B',
    columnItems: []
  },
  {
    columnName: 'C',
    columnItems: []
  }
]

export const state = () => ({
  boardData: []
})

export const mutations = {
  setBoardData(state, payload) {
    state.boardData = payload
    localStorage.setItem('boardData', JSON.stringify(payload))
  },
  pushItemToColumn(state, payload) {
    state.boardData[payload.columnIndex].columnItems.push(payload.item)
    localStorage.setItem('boardData', JSON.stringify(state.boardData))
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
        return JSON.parse(data)
      } catch (error) {
        return null
      }
    }
    return null
  },
  fetchBoardData({ dispatch, commit }) {
    dispatch('fetchBoardDataFromLocalStorage').then((data) => {
      const boardData = data || defaultBoardData
      commit('setBoardData', boardData)
    })
  },
  addItemToColumn({ commit }, { item, columnIndex }) {
    commit('pushItemToColumn', { item, columnIndex })
  }
}
