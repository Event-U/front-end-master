import api from '@/lib/api.js'
const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

const state = {
    newBoard: {},
    activeBoard: {},
    tasksIds: [],
    columnIds: []
}

// getters
const getters = {

}

// actions
const actions = {
    async createBoard({ commit, rootState, dispatch }, newEvent) {
        await dispatch('columns/createDefaultColumns', newEvent, { root: true })

        const newBoard = await axios.post(`${urlBase}/board`, {
            event: newEvent._id,
            columns: rootState.columns.newBoardDefaultColumns,
            service: null
        })

        commit('SET_NEW_EVENT_BOARD', newBoard.data.data.board)
        return 'ready'
    }
}

// mutations
const mutations = {
    SET_NEW_EVENT_BOARD(state, newBoard) {
        state.newBoard = newBoard
    },
    PUSH_COLUMN_ID(state, columnId) {
        state.columnIds.push(columnId)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}