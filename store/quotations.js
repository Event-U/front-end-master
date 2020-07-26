import api from '@/lib/api';

export const state = () => ({
	quotations: [],

	newQuotation: {},

	quotationsNeeds: [],

	updatedQuotation: {},
});

// mutations
export const mutations = {
	SET_QUOTATIONS(state, quotations) {
		state.quotations = quotations;
	},

	ADDING_NEW_QUOTATION(state, quotation) {
		state.quotations.push(quotation);
	},

	SET_NEED_QUOTATION(state, filteredQuotations) {
		state.quotationsNeeds = filteredQuotations;
	},
};

// actions
export const actions = {
	async fetchQuotation({ commit }) {
		const quotationsObject = await api.getQuotations();
		commit('SET_QUOTATIONS', quotationsObject);
	},

	async fetchNewQuotation({ commit }, id) {
		const newQuotation = await api.getQuotationById(id);
		commit('events/ADDING_NEW_QUOTATION', newQuotation, { root: true });
	},

	async postQuotation({ commit, rootState, state }, newQuotObj) {
		commit('SET_QUOTATIONS', rootState.events.activeNeed.quotation);
		const newQuotationObject = await api.createQuotation(newQuotObj);

		const quotationsId = state.quotations.map((quotation) => {
			return quotation._id;
		});

		const needId = rootState.events.activeNeed._id;

		await api.updateNeed(needId, quotationsId);
	},

	async updateQuotation({ commit, dispatch }, { status, id }) {
		const updatedQuotation = await api.updateQuotation(id, `${status}`);

		if (status === 4) {
			await dispatch('task/postQuotationEventTask', status, { root: true });
			await dispatch('task/postQuotationServiceTask', status, { root: true });
		}
	},
};
