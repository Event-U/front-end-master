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

// getters
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

// actions
const actions = {

}

// mutations
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}