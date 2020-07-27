import api from '@/lib/api';

export const state = () => ({
	quotations: [],

	newQuotation: {},

	quotationsNeeds: [],

	updatedQuotation: {},
});

export const getters = {
	awaredQuotations: (state) =>
		state.quotations.filter(
			(quotation) => quotation.status === 4 || quotation.status === 2
		),
};

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

	UPDATE_QUOTATION(state, { id, status }) {
		console.log('[MUtation] Update, quotation:', id, status);
		state.quotations.map((quotation) => {
			if (quotation._id === id) {
				quotation.status = status;
				return quotation;
			} else {
				return quotation;
			}
		});
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

	async postQuotation({ commit, rootState, state, dispatch }, newQuotObj) {
		commit('SET_QUOTATIONS', rootState.needs.activeNeed.quotation);
		const newQuotationObject = await api.createQuotation(newQuotObj);

		let quotationsId = state.quotations.map((quotation) => {
			return quotation._id;
		});

		let needId = rootState.needs.activeNeed._id;

		await api.updateNeed(needId, [newQuotationObject._id, ...quotationsId]);
		dispatch(
			'events/addingNewQuotation',
			{ quotation: newQuotationObject },
			{ root: true }
		);
	},

	async updateQuotation({ commit, dispatch }, { status, id }) {
		await api.updateQuotation(id, status);
		commit('UPDATE_QUOTATION', { status, id });

		if (status === 4) {
			await dispatch('task/postQuotationEventTask', status, { root: true });
			await dispatch('task/postQuotationServiceTask', status, { root: true });
		}
	},
};
