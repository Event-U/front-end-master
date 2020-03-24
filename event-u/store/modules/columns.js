const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'
    // const actualBoard = state.changeBoard ? changeBoard : defaultBoard

const state = {
    newBoardDefaultColumns: []
}

const getters = {

}

const actions = {
    async createDefaultColumns({ commit, rootState }) {
        await commit('CLEAN_COLUMN_ID')

        const toDo = await axios.post(`${urlBase}/column`, {
            name: 'Por hacer',
            tasks: rootState.task.tasksIdsFromNeed
        })
        const doing = await axios.post(`${urlBase}/column`, { name: 'Haciendo' })
        const done = await axios.post(`${urlBase}/column`, { name: 'Hecho' })

        await commit('PUSH_COLUMN_ID', toDo.data.data.column._id)
        await commit('PUSH_COLUMN_ID', doing.data.data.column._id)
        await commit('PUSH_COLUMN_ID', done.data.data.column._id)
    },
    async createDefaultServiceColumns({ commit }) {
        await commit('CLEAN_COLUMN_ID')

        const toDo = await axios.post(`${urlBase}/column`, { name: 'Por hacer' })
        const doing = await axios.post(`${urlBase}/column`, { name: 'Haciendo' })
        const done = await axios.post(`${urlBase}/column`, { name: 'Hecho' })

        await commit('PUSH_COLUMN_ID', toDo.data.data.column._id)
        await commit('PUSH_COLUMN_ID', doing.data.data.column._id)
        await commit('PUSH_COLUMN_ID', done.data.data.column._id)
    },
    async createNewColumn({ commit, rootState, state }, newColumnObject) {
        await commit('CLEAN_COLUMNS_ID')

        const columnObjects = rootState.board.activeBoard.columns
        columnObjects.forEach(async column => {
            await commit('PUSH_COLUMN_ID', column._id)
        });

        const newColumn = await axios.post(`${urlBase}/column`, newColumnObject)

        commit('PUSH_COLUMN_ID', newColumn.data.data.column._id)

        const boardId = rootState.board.activeBoard._id
        const updateBoard = await axios.patch(`${urlBase}/board/${boardId}`, {
            columns: state.newBoardDefaultColumns
        })

        commit('board/PUSH_NEW_COLUMN', newColumn.data.data.column, { root: true })
    }
}

const mutations = {
    PUSH_COLUMN_ID(state, columnId) {
        state.newBoardDefaultColumns.push(columnId)
    },
    CLEAN_COLUMNS_ID(state) {
        state.newBoardDefaultColumns = []
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}