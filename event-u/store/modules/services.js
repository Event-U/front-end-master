import api from '@/lib/api'

const state = {
    categories: [],
    services: [],
    newService: {}
}

// getters
const getters = {
    servicesByCategoryId: state => name => {
        return state.services.filter(service => service.category === name)
    },
    categoryById: state => id => {
        return state.categories.find(category => category._id === id)
    },
    categoryNameById: state => id => {
        const catObj = state.categories.find(category => category._id === id)
        return catObj.name
    }
}

// actions
const actions = {
    async postService(state, service) {
        const newService = await api.createServices(service)
        state.newService = newService

    },
    async fetchServices({ commit }) {
        const allServices = await api.getServices()
        commit('SET_SERVICES', allServices)
    },
    async fetchCategories({ commit }) {
        const allCategories = await api.getCategorys()
        commit('SET_CATEGORIES', allCategories)
    },
}

// mutations
const mutations = {
    SET_SERVICES(state, services) {
        state.services = services
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}