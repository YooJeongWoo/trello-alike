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
  addColumn(state, payload) {
    const { columnName } = payload
    switch (payload.position) {
      case 'first':
        state.boardData.unshift({
          columnName,
          columnItems: []
        })
        break
      case 'last':
        state.boardData.push({
          columnName,
          columnItems: []
        })
        break
      default:
        break
    }
  },
  pushItemToColumn(state, payload) {
    state.boardData[payload.columnIndex].columnItems.push(payload.item)
    localStorage.setItem('boardData', JSON.stringify(state.boardData))
  },
  setItemData(state, payload) {
    state.boardData[payload.columnIndex].columnItems[payload.itemIndex].data =
      payload.data
  },
  moveItem(state, payload) {
    const copyBoard = state.boardData
    copyBoard[payload.to.columnIndex].columnItems.push(
      copyBoard[payload.from.columnIndex].columnItems.splice(
        payload.from.itemIndex,
        1
      )[0]
    )
    state.boardData = copyBoard
    localStorage.setItem('boardData', JSON.stringify(copyBoard))
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
  addColumn({ commit }, { columnName, position }) {
    commit('addColumn', { columnName, position })
  },
  addItemToColumn({ commit }, { item, columnIndex }) {
    commit('pushItemToColumn', { item, columnIndex })
  },
  setItemName({ commit }, { data, columnIndex, itemIndex }) {
    commit('setItemData', { data, columnIndex, itemIndex })
  },
  moveItemToColumn({ commit }, { from, to }) {
    commit('moveItem', { from, to })
  }
}
