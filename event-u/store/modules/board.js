import api from '@/lib/api.js'
const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

const state = {
    newBoard: {},
    activeBoard: {},
    tasksIds: [],
    columnIds: [],
    newServiceBoard: [],
    allBoards: [],
    boardType: ''
}

// getters
const getters = {
    getEventBoard: state => id => {
        return state.allBoards.find(board => board.event ? board.event._id === id : console.log(board))
    },
    getServiceBoard: state => id => {
        return state.allBoards.find(board => board.service ? board.service._id === id : console.log(board))
    },
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
    },
    async getEventBoard({ commit, getters }, activeEventId) {
        const allBoards = await axios.get(`${urlBase}/board`)
        commit('SET_FETCH_BOARDS', allBoards.data.data.board)
        console.log(activeEventId)
        const eventBoard = await getters.getEventBoard(activeEventId)
        commit('SET_ACTIVE_BOARD', eventBoard)
    },
    async getServiceBoard({ commit, getters }, activeServiceId) {
        const allBoards = await axios.get(`${urlBase}/board`)
        commit('SET_FETCH_BOARDS', allBoards.data.data.board)
        console.log(activeServiceId)
        const serviceBoard = await getters.getServiceBoard(activeServiceId)
        commit('SET_ACTIVE_BOARD', serviceBoard)
    },

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
    },
    SET_FETCH_BOARDS(state, boards) {
        state.allBoards = boards
    },
    SET_ACTIVE_BOARD(state, board) {
        state.activeBoard = board
    },
    PUSH_NEW_COLUMN(state, newColumn) {
        state.activeBoard.columns.push(newColumn)
    },
    PUSH_NEW_TASK(state, taskObject) {
        state.activeBoard.columns[taskObject.columnIndex].tasks.push(taskObject.taskObj)
    },
    SET_BOARD_TYPE(state, routeName) {
        state.boardType = routeName
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}