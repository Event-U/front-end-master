const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

export const state = () => ({
    newBoard: {},
    activeBoard: {},
    tasksIds: [],
    columnIds: [],
    newServiceBoard: [],
    allBoards: [],
    boardType: ''
})

// getters
export const getters = {
    getEventBoard: state => id => {
        return state.allBoards.find(board => board.event ? board.event._id === id : console.log(board))
    },
    getServiceBoard: state => id => {
        return state.allBoards.find(board => board.service ? board.service._id === id : console.log('board'))
    },
    getTasksIds: state => tasks => {
        return tasks.map(task => task._id)
    },
    getColumnsIds: state => columns => {
        return columns.map(column => column._id)
    },
}

// actions
export const actions = {
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
        await commit('SET_ACTIVE_BOARD', eventBoard)
        await commit('columns/SET_ACTIVE_COLUMNS', eventBoard.columns, { root: true })
    },
    async getServiceBoard({ commit, getters }, activeServiceId) {
        const allBoards = await axios.get(`${urlBase}/board`)
        commit('SET_FETCH_BOARDS', allBoards.data.data.board)
        const serviceBoard = await getters.getServiceBoard(activeServiceId)
        commit('SET_ACTIVE_BOARD', serviceBoard)
        commit('columns/SET_ACTIVE_COLUMNS', serviceBoard.columns, { root: true })
    },
    async moveTask({ commit, state, getters }, {
        fromTasks,
        toTasks,
        fromTaskIndex,
        toTaskIndex,
        fromColumnIndex,
        toColumnId
    }) {
        await commit('MOVE_TASK', { fromTasks, toTasks, fromTaskIndex, toTaskIndex, fromColumnIndex, toColumnId })
        state.activeBoard.columns.forEach(async column => {
            const columnId = column._id
            if (column.tasks !== 0) {
                const tasksIds = await getters.getTasksIds(column.tasks)
                const updatedColumn = await axios.patch(`${urlBase}/column/${columnId}`, {
                    tasks: tasksIds
                })
            } else {
                const updatedEmptyColumn = await axios.patch(`${urlBase}/column/${columnId}`, {
                    tasks: []
                })
            }
        });
    },
    async moveColumn({ commit, getters, state, dispatch }, {
        fromColumnIndex,
        toColumnIndex
    }) {
        console.log('Comenzando función')
            // await commit('MOVE_COLUMN', { fromColumnIndex, toColumnIndex })
        const columnList = await state.activeBoard.columns
        const columnToMove = await columnList.splice(fromColumnIndex, 1)[0]
        await columnList.splice(toColumnIndex, 0, columnToMove)
        const boardId = state.activeBoard._id
        const columnsIds = await getters.getColumnsIds(columnList)
        await dispatch('columns/moveColumn', { boardId, columnList }, { root: true })
    }

}

// mutations
export const mutations = {
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
    },
    MOVE_TASK(state, {
        fromTasks,
        toTasks,
        fromTaskIndex,
        toTaskIndex,
    }) {
        const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
        toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
        console.log('Comenzando a mover')
        const columnList = state.activeBoard.columns
        const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
        columnList.splice(toColumnIndex, 0, columnToMove)
        console.log('Terminado de mover', columnList)
    },
}