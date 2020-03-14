import api from '@/lib/api.js'
import event from '@/store/modules/events.js'

const state = {
    needs: [],
    activeNeed: {}
}

// getters
const getters = {

}

// actions
const actions = {
    fetchNeeds({ commit, rootState }) {
        const asyncNeeds = []
        const needsIds = rootState.event.activeEvent.needs
        needsIds.forEach(async need => {
            const needObject = await api.getNeedById(need)
            asyncNeeds.push(needObject)
        });
        commit('SET_NEEDS', asyncNeeds)
    },


}

// mutations
const mutations = {
    SET_NEEDS(state, needs) {
        state.needs = needs
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}