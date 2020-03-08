const state = {
    activeEvent: {},
    activeNeed: '',
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
    change: (state, name) => {
        state.activeEvent = name
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}