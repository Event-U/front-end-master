import api from '@/lib/api.js';
import axios from 'axios';
const urlBase = 'https://api.event-u.site';

export const state = () => ({
	activeEvent: null,

	activeNeed: null,

	events: null,

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

	async addingNewQuotation({ commit, rootState }, { quotation }) {
		const newQuotation = await api.getQuotationById(quotation._id);
		commit('ADDING_NEW_QUOTATION', {
			needId: rootState.needs.activeNeed._id,
			quotation: newQuotation,
		});
	},
};

// mutations
export const mutations = {
	SET_ACTIVE_EVENT: (state, name) => {
		state.activeEvent = name;
	},

	ADDING_NEW_QUOTATION(state, { needId, quotation }) {
		const needs = state.activeEvent.needs.map((need) => {
			if (need._id === needId) {
				need['quotation'].push(quotation);
				return need;
			} else {
				return need;
			}
		});
		state.activeEvent.needs = needs;
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
