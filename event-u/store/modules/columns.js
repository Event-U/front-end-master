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
        const toDo = await axios.post(`${urlBase}/column`, {
            name: 'Por hacer',
            tasks: rootState.task.tasksIdsFromNeed
        })
        console.log(toDo)
        const doing = await axios.post(`${urlBase}/column`, { name: 'Haciendo' })
        const done = await axios.post(`${urlBase}/column`, { name: 'Hecho' })
        await commit('PUSH_COLUMN_ID', toDo.data.data.column._id)
        await commit('PUSH_COLUMN_ID', doing.data.data.column._id)
        await commit('PUSH_COLUMN_ID', done.data.data.column._id)
    },
    async createDefaultServiceColumns({ commit }) {
        const toDo = await axios.post(`${urlBase}/column`, { name: 'Por hacer' })
        const doing = await axios.post(`${urlBase}/column`, { name: 'Haciendo' })
        const done = await axios.post(`${urlBase}/column`, { name: 'Hecho' })
        await commit('PUSH_COLUMN_ID', toDo.data.data.column._id)
        await commit('PUSH_COLUMN_ID', doing.data.data.column._id)
        await commit('PUSH_COLUMN_ID', done.data.data.column._id)
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