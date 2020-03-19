import api from '@/lib/api.js'
import event from '@/store/modules/events.js'

const state = {
    needs: [],
    activeNeed: {},
    newNeed: {},
    needsId: [],
}

// getters
const getters = {

}

// actions
const actions = {
    async fetchNeeds({ commit, rootState }) {
        const eventId = rootState.event.activeEvent._id
        const eventObject = await api.getEventById(eventId)
        const needsObjects = eventObject.needs
        commit('SET_NEEDS', needsObjects)
    },
    async postNeedToEvent({ state, commit, rootState }, need) {
        const newNeedObject = await api.createNeed(need)
        commit('SET_NEW_NEED', newNeedObject)
        commit('ADDING_NEW_NEED', newNeedObject)
        state.needs.forEach(need => {
            commit('PUSH_NEED_ID', need._id)
        });
        const eventId = rootState.event.activeEvent._id
        const needsIds = state.needsId
        const updatedEvent = await api.updateEvent(eventId, needsIds)
        commit('CLEAN_NEED_ID_ARRAY')
    },
    async postNeed({ commit }, need) {
        const newNeedObject = await api.createNeed(need)
        commit('SET_NEW_NEED', newNeedObject)
        return 'ready'
    },

}

// mutations
const mutations = {
    SET_NEEDS(state, needs) {
        state.needs = needs
    },
    SET_NEW_NEED(state, need) {
        state.newNeed = need
    },
    ADDING_NEW_NEED(state, need) {
        state.needs.push(need)
    },
    PUSH_NEED_ID(state, needId) {
        state.needsId.push(needId)
    },
    CLEAN_NEED_ID_ARRAY(state) {
        state.needsId = []
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}