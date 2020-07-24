import api from '@/lib/api.js';

const urlBase = 'http://localhost:9000';

export const state = () => ({
	needs: [],
	activeNeed: {},
	newNeed: {},
	needsId: [],
});

// getters
export const getters = {};

// actions
export const actions = {
	async fetchNeeds({ commit, rootState }) {
		const eventId = rootState.events.activeEvent._id;
		const { needs: needsObjects } = await api.getEventById(eventId);

		commit('SET_NEEDS', needsObjects);
	},

	async postNeedToEvent({ state, commit, rootState }, need) {
		const newNeedObject = await api.createNeed(need);

		commit('SET_NEW_NEED', newNeedObject);
		commit('ADDING_NEW_NEED', newNeedObject);

		const needsIds = state.needs.filter((need) => {
			return need.id;
		});
		const eventId = rootState.events.activeEvent._id;

		await api.updateEvent(eventId, needsIds);
		commit('CLEAN_NEED_ID_ARRAY');
	},

	async postNeed({ commit, dispatch }, need) {
		const newNeedObject = await api.createNeed(need);

		dispatch('task/createTaskFromNeed', newNeedObject, { root: true });
		commit('SET_NEW_NEED', newNeedObject);
		return 'ready';
	},
};

// mutations
export const mutations = {
	SET_NEEDS(state, needs) {
		state.needs = needs;
	},

	SET_NEW_NEED(state, need) {
		state.newNeed = need;
	},

	ADDING_NEW_NEED(state, need) {
		state.needs.push(need);
	},

	PUSH_NEED_ID(state, needId) {
		state.needsId.push(needId);
	},

	CLEAN_NEED_ID_ARRAY(state) {
		state.needsId = [];
	},
};
