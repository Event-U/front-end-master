const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

const state = {
    tasksIdsFromNeed: []
}

// getters
const getters = {

}

// actions
const actions = {
    async createTaskFromNeed({ commit }, newNeed) {
        console.log(newNeed)
        const newTaskObject = await axios.post(`${urlBase}/task`, {
            name: `Revisar cotizaciones de ${newNeed.description}`,
            description: `Revisar las cotizaciones de ${newNeed.description}`
        })
        console.log(newTaskObject)
        commit('PUSH_NEW_ID_TASK_FROM_NEED', newTaskObject.data.data.task._id)
    }
}

// mutations
const mutations = {
    PUSH_NEW_ID_TASK_FROM_NEED(state, newTaskId) {
        state.tasksIdsFromNeed.push(newTaskId)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}