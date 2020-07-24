export const strict = false;

export const state = () => ({
	activePage: '',
	lastPage: '',
	activeUser: '5de375dca3a7ba6a659fb84f',
});

export const mutations = {
	change: (state, name) => {
		state.activePage = name;
	},

	changeLastPage: (state, name) => {
		state.lastPage = name;
	},
};
