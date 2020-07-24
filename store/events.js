import api from '@/lib/api.js';

export const state = () => ({
	activeEvent: {},

	activeNeed: {},

	newEventObject: {},

	events: [],

	newEvent: {},
});

// actions
export const actions = {
	async fetchEvents({ commit }) {
		const allEvents = await api.getEvent();
		commit('SET_EVENTS', allEvents);
	},

	async postEvent({ commit, dispatch }, newEventObject) {
		const newEvent = await api.createEvent(newEventObject);
		dispatch('board/createBoard', newEvent, { root: true });
		commit('SET_NEW_EVENT', newEvent);
	},
};

// mutations
export const mutations = {
	change: (state, name) => {
		state.activeEvent = name;
	},

	changeNeed: (state, payload) => {
		state.activeNeed = payload;
	},

	setNewBasics: (state, { name, description }) => {
		state.newEventObject['name'] = name;
		state.newEventObject['description'] = description;
	},

	setNewSpecific: (state, { date, addreses, image }) => {
		state.newEventObject['date'] = date;
		state.newEventObject['addreses'] = addreses;
		state.newEventObject['image'] = image;
	},

	SET_EVENTS(state, eventss) {
		state.events = eventss;
	},

	SET_NEW_EVENT(state, event) {
		state.newEvent = event;
	},
};
