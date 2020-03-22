import api from '@/lib/api.js'
const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

const state = {
    newBoard: {},
    activeBoard: {},
    tasksIds: [],
    columnIds: [],
    newServiceBoard: []
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
        commit('columns/CLEAN_COLUMNS_ID', { root: true })
        return 'ready'
    },
    async createServiceBoard({ commit, rootState, dispatch }, newService) {
        await dispatch('columns/createDefaultServiceColumns', newService, { root: true })
        const newServiceBoard = await axios.post(`${urlBase}/board`, {
            service: newService._id,
            columns: rootState.columns.newBoardDefaultColumns,
            event: null
        })
        commit('SET_NEW_EVENT_BOARD', newServiceBoard.data.data.board)
        commit('columns/CLEAN_COLUMNS_ID', newServiceBoard, { root: true })
    }
}

// mutations
const mutations = {
    SET_NEW_EVENT_BOARD(state, newBoard) {
        state.newBoard = newBoard
    },
    PUSH_COLUMN_ID(state, columnId) {
        state.columnIds.push(columnId)
    },
    SET_NEW_SERVICE_BOARD(state, newServiceBoard) {
        state.newServiceBoard = newServiceBoard
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}