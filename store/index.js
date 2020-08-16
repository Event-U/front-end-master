export const strict = false;

export const state = () => ({
	activePage: '',
	lastPage: '',
	activeUser: '5f1bac56dcfdc7297c2771e6',
});

export const mutations = {
	change: (state, name) => {
		state.activePage = name;
	},

	changeLastPage: (state, name) => {
		state.lastPage = name;
	},
};
