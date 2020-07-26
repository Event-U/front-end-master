import api from '@/lib/api.js';
import axios from 'axios';
const urlBase = 'http://localhost:9000';

export const state = () => ({
	activeEvent: null,

	activeNeed: null,

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

	async findEvent({ commit }, eventId) {
		const {
			data: {
				data: { event },
			},
		} = await axios.get(`${urlBase}/event/${eventId}`);

		commit('SET_ACTIVE_EVENT', event);
	},

	async postEvent({ commit, dispatch }, newEventObject) {
		const newEvent = await api.createEvent(newEventObject);
		dispatch('board/createBoard', newEvent, { root: true });
		commit('SET_NEW_EVENT', newEvent);
	},
};

// mutations
export const mutations = {
	SET_ACTIVE_EVENT: (state, name) => {
		state.activeEvent = name;
	},

	ADDING_NEW_NEED(state, need) {
		const needs = state.activeEvent.needs;
		needs.push(need);
		state.activeEvent.needs = needs;
	},

	SET_EVENTS(state, events) {
		state.events = events;
	},

	SET_NEW_EVENT(state, event) {
		state.newEvent = event;
	},
};
