const axios = require('axios');
const urlBase = 'https://event-uback.mybluemix.net'

const state = {
    tasksIdsFromNeed: [],
    activeTask: {},
    tasksIds: [],
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
    },
    setActiveTask({ commit }, activeTask) {
        commit('SET_ACTIVE_TASK', activeTask)
    },
    async createNewTask({ commit, state }, taskObject) {
        commit('CLEAN_TASK_IDS')
        if (taskObject.tasks !== 0) {
            taskObject.tasks.forEach(async task => {
                await commit('PUSH_TASK_ID', task._id)
            });
        }

        const newTask = await axios.post(`${urlBase}/task`, {
            name: taskObject.name
        })
        commit('PUSH_TASK_ID', newTask.data.data.task._id)

        const updatedColumn = await axios.patch(`${urlBase}/column/${taskObject.columnId}`, {
            tasks: state.tasksIds
        })
        commit('board/PUSH_NEW_TASK', {
            taskObj: newTask.data.data.task,
            columnIndex: taskObject.columnIndex
        }, { root: true })
    },
    async updateTask({ commit, state }, taskObject) {
        const updatedTask = await axios.patch(`${urlBase}/task/${taskObject._id}`, {
            name: taskObject.name,
            description: taskObject.description,
        })
    },

}

// mutations
const mutations = {
    PUSH_NEW_ID_TASK_FROM_NEED(state, newTaskId) {
        state.tasksIdsFromNeed.push(newTaskId)
    },
    SET_ACTIVE_TASK(state, activeTask) {
        state.activeTask = activeTask
    },
    PUSH_TASK_ID(state, id) {
        state.tasksIds.push(id)
    },
    CLEAN_TASK_IDS(state) {
        state.tasksIds = []
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}