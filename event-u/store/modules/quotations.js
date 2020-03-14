import api from '@/lib/api'

const state = {
    quotations: []
}

// getters
const getters = {

}

// actions
const actions = {
    async fetchQuotation({ commit }) {
        const allQuotationObjects = []
        const quotationObject = await api.getQuotations()
        quotationObject.forEach(async quotation => {
            const needObject = await api.getNeedById(quotation.need[0])
            quotation.need[0] = needObject
            allQuotationObjects.push(quotation)
        });
        commit('SET_QUOTATIONS', allQuotationObjects)
    },
}

// mutations
const mutations = {
    SET_QUOTATIONS(state, quotations) {
        state.quotations = quotations
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}