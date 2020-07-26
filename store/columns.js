const axios = require('axios');
const urlBase = 'http://localhost:9000';
// const actualBoard = state.changeBoard ? changeBoard : defaultBoard

export const state = () => ({
	newBoardDefaultColumns: [],
});

export const mutations = {
	PUSH_COLUMN_ID(state, columnId) {
		state.newBoardDefaultColumns.push(columnId);
	},
};

export const actions = {
	async createDefaultColumns({ commit, rootState }) {
		await commit('CLEAN_COLUMNS_ID');

		const toDo = await axios.post(`${urlBase}/column`, {
			name: 'Por hacer',
			tasks: rootState.task.tasksIdsFromNeed,
		});
		const doing = await axios.post(`${urlBase}/column`, { name: 'Haciendo' });
		const done = await axios.post(`${urlBase}/column`, { name: 'Hecho' });

		await commit('PUSH_COLUMN_ID', toDo.data.data.column._id);
		await commit('PUSH_COLUMN_ID', doing.data.data.column._id);
		await commit('PUSH_COLUMN_ID', done.data.data.column._id);
	},

	async createDefaultServiceColumns({ commit }) {
		await commit('CLEAN_COLUMNS_ID');

		const toDo = await axios.post(`${urlBase}/column`, {
			name: 'Por preparar',
		});
		const doing = await axios.post(`${urlBase}/column`, { name: 'Preparando' });
		const done = await axios.post(`${urlBase}/column`, { name: 'Entregado' });

		await commit('PUSH_COLUMN_ID', toDo.data.data.column._id);
		await commit('PUSH_COLUMN_ID', doing.data.data.column._id);
		await commit('PUSH_COLUMN_ID', done.data.data.column._id);
	},

	async createNewColumn({ dispatch }, newColumnObject) {
		const newColumn = await axios.post(`${urlBase}/column`, newColumnObject);

		dispatch('board/pushNewColumn', newColumn.data.data.column, { root: true });
	},

	async moveColumn(_, { boardId, columnList }) {
		const columnsIds = columnList.filter((column) => column._id);

		await axios.patch(`${urlBase}/board/${boardId}`, {
			columns: columnsIds,
		});
	},
};
