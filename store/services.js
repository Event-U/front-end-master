import api from '@/lib/api';

export const state = () => ({
	categories: [],

	services: [],

	newService: {},
});

// mutations
export const mutations = {
	SET_SERVICES(state, services) {
		state.services = services;
	},

	SET_CATEGORIES(state, categories) {
		state.categories = categories;
	},

	SET_ACTIVE_NEED_SERVICE(state, service) {
		state.activeNeedService = service;
	},

	SET_NEW_SERVICE(state, newService) {
		state.newService = newService;
	},
};

// getters
export const getters = {
	servicesByCategoryId: (state) => (id) => {
		return state.services.filter((service) => service.category._id === id);
	},

	categoryById: (state) => (id) => {
		return state.categories.find((category) => category._id === id);
	},

	categoryNameById: (state) => (id) => {
		const catObj = state.categories.find((category) => category._id === id);
		return catObj.name;
	},

	serviceNameById: (state) => (id) => {
		const nate = state.services.find((service) => service._id === id);
		return nate.name;
	},

	getNameService: (state) => (id) =>
		state.services.find((service) => service._id === id),
};

// actions
export const actions = {
	async postService({ dispatch, commit }, service) {
		const newService = await api.createServices(service);

		dispatch('board/createServiceBoard', newService, { root: true });

		commit('SET_NEW_SERVICE', newService);
	},

	async fetchServices({ commit }) {
		const allServices = await api.getServices();

		commit('SET_SERVICES', allServices);
	},

	async fetchCategories({ commit }) {
		const allCategories = await api.getCategorys();
		commit('SET_CATEGORIES', allCategories);
	},

	async getNameService({ commit, state, getters }, id) {
		const serviceObject = getters.getNameService(id);
		commit('SET_ACTIVE_NEED_SERVICE', serviceObject);
	},
};
