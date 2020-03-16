import defaultBoard from '@/lib/default-board'

// const actualBoard = state.changeBoard ? changeBoard : defaultBoard

const state = {
    board: defaultBoard,
    changeBoard: {},
    activeTask: {
        name: 'Ejemplooo',
        description: 'Éste es un ejemplo',
        column: {
            name: 'Por hacer'
        }
    },
}

const getters = {
    getTask(state) {
        return (id) => {
            for (const column of state.board.columns) {
                for (const task of column.tasks) {
                    if (task.id === id) {
                        return task
                    }
                }
            }
        }
    }
}

const actions = {

}

const mutations = {
    CREATE_TASK(state, { tasks, name }) {
        tasks.push({
            name,
            id: tasks.length + 1,
            description: ''
        })
    },
    UPDATE_TASK(state, { task, key, value }) {
        task[key] = value
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}