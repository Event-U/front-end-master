import api from '@/lib/api.js';

const urlBase = 'http://localhost:9000';

export const state = () => ({
	newNeed: {},

	needsId: [],

	activeNeed: null,
});

// getters
export const getters = {};

// actions
export const actions = {
	async findNeed({ commit, rootState }, id) {
		const need = rootState.events.activeEvent.needs.find(
			(need) => need._id === id
		);
		commit('SET_ACTIVE_NEED', need);
	},

	async fetchNewNeed({ commit, rootState }, id) {
		const newNeed = await api.getNeedById(id);
		commit('events/ADDING_NEW_NEED', newNeed, { root: true });
	},

	async postNeedToEvent({ dispatch, state, rootState }, need) {
		await dispatch('postNeed', need);

		const needsIds = rootState.events.activeEvent.needs.map((need) => need._id);
		const eventId = rootState.events.activeEvent._id;

		await api.updateEvent(eventId, [...needsIds, state.newNeed._id]);
		dispatch('fetchNewNeed', state.newNeed._id);
	},

	async postNeed({ commit, dispatch }, need) {
		const newNeedObject = await api.createNeed(need);

		commit('SET_NEW_NEED', newNeedObject);
		await dispatch('task/createTaskFromNeed', newNeedObject, { root: true });
	},
};

// mutations
export const mutations = {
	SET_ACTIVE_NEED(state, need) {
		state.activeNeed = need;
	},

	SET_NEW_NEED(state, need) {
		state.newNeed = need;
	},
};
