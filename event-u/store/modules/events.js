const state = {
    activeEvent: {},
    activeNeed: {
        name: '',
        description: '',
        _id: '',
        service: {
            name: ''
        },
        quotation: []
    },
    newEventObject: {
        name: '',
        description: '',
        date: '',
        addreses: '',
        image: '',
        needs: []
    }
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
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}