import api from '@/lib/api.js'

const state = {
    activeEvent: {},
    activeNeed: {},
    newEventObject: {
        name: '',
        description: '',
        date: '',
        addreses: '',
        image: '',
        needs: []
    },
    events: []
}

// getters
const getters = {

}

// actions
const actions = {
    async fetchEvents({ commit }) {
        const allEvents = await api.getEvent()
        commit('SET_EVENTS', allEvents)
    },
    async postEvent({ commit }) {
        const newEvent = await api.createEvent(newEventObject)
    }
}

// mutations
const mutations = {
    change: (state, name) => {
        state.activeEvent = name
    },
    changeNeed: (state, payload) => {
        state.activeNeed = payload
    },
    setNewBasics: (state, { name, description }) => {
        state.newEventObject['name'] = name
        state.newEventObject['description'] = description
    },
    setNewSpecific: (state, { date, addreses, image }) => {
        state.newEventObject['date'] = date
        state.newEventObject['addreses'] = addreses
        state.newEventObject['image'] = image
    },
    SET_EVENTS(state, eventss) {
        state.events = eventss
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}