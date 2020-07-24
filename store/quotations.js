import api from '@/lib/api';

export const state = () => ({
	quotations: [],
	newQuotation: {},
	quotationsId: [],
	quotationsNeeds: [],
	needId: '',
	updatedQuotation: {},
});

// getters
export const getters = {
	quotationsByNeedId: (state) => (id) => {
		return state.quotations.filter((quotation) => quotation.need._id === id);
	},
};

// actions
export const actions = {
	async fetchQuotation({ commit }) {
		const quotationsObject = await api.getQuotations();
		commit('SET_QUOTATIONS', quotationsObject);
	},

	async postQuotation({ commit, rootState, state }, newQuotObj) {
		commit('SET_QUOTATIONS', rootState.event.activeNeed.quotation);
		const newQuotationObject = await api.createQuotation(newQuotObj);

		commit('SET_NEW_QUOTATION', newQuotationObject);
		commit('ADDING_NEW_QUOTATION', state.newQuotation);

		const quotationsId = state.quotations.filter((quotation) => {
			return quotation.id;
		});
		const needId = rootState.event.activeNeed._id;

		await api.updateNeed(needId, quotationsId);
	},

	async updateQuotation({ commit, dispatch }, { status, id }) {
		const updatedQuotation = await api.updateQuotation(id, `${status}`);

		commit('SET_UPDATED_QUOTATION', updatedQuotation);

		if (status === 4) {
			await dispatch('task/postQuotationEventTask', status, { root: true });
			await dispatch('task/postQuotationServiceTask', status, { root: true });
		}
	},
};

// mutations
export const mutations = {
	SET_QUOTATIONS(state, quotations) {
		state.quotations = quotations;
	},

	SET_NEW_QUOTATION(state, quotation) {
		state.newQuotation = quotation;
	},

	ADDING_NEW_QUOTATION(state, quotation) {
		state.quotations.push(quotation);
	},

	PUSH_QUOTATION_ID(state, quotation) {
		state.quotationsId.push(quotation);
	},

	CLEAN_QUOTATIONS_ID(state) {
		state.quotationsId = [];
	},

	SET_NEED_QUOTATION(state, filteredQuotations) {
		state.quotationsNeeds = filteredQuotations;
	},

	SET_NEED_ID(state, needId) {
		state.needId = needId;
	},

	SET_UPDATED_QUOTATION(state, updatedQuotation) {
		state.updatedQuotation = updatedQuotation;
	},
};
