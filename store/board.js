const axios = require('axios');
const urlBase = 'http://localhost:9000';

export const state = () => ({
	activeBoard: null,

	boardType: '',
});

// getters
export const getters = {
	getTasksIds: () => (tasks) => {
		return tasks.map((task) => task._id);
	},

	getBoardColumns: (state) => {
		return state.activeBoard.columns.map((column) => column._id);
	},
};

// actions
export const actions = {
	async createBoard({ commit, rootState, dispatch }, newEvent) {
		await dispatch('columns/createDefaultColumns', newEvent, { root: true });

		const newBoard = await axios.post(`${urlBase}/board`, {
			event: newEvent._id,
			columns: rootState.columns.newBoardDefaultColumns,
			service: null,
		});

		commit('columns/CLEAN_COLUMNS_ID', { root: true });
	},

	async pushNewColumn({ commit, rootState, state, getters }, newColumnObject) {
		const boardId = state.activeBoard._id;
		const columnsBoardId = getters.getBoardColumns;

		await axios.patch(`${urlBase}/board/${boardId}`, {
			columns: [...columnsBoardId, newColumnObject._id],
		});

		commit('board/PUSH_NEW_COLUMN', newColumnObject, { root: true });
	},

	async createServiceBoard({ commit, rootState, dispatch }, newService) {
		await dispatch('columns/createDefaultServiceColumns', newService, {
			root: true,
		});

		const newServiceBoard = await axios.post(`${urlBase}/board`, {
			service: newService._id,
			columns: rootState.columns.newBoardDefaultColumns,
			event: null,
		});

		commit('columns/CLEAN_COLUMNS_ID', newServiceBoard, { root: true });
	},

	async getEventBoard({ commit }, activeEventId) {
		const {
			data: {
				data: { board },
			},
		} = await axios.get(`${urlBase}/board/event/${activeEventId}`);

		await commit('SET_ACTIVE_BOARD', board);
	},

	async getServiceBoard({ commit }, activeServiceId) {
		const {
			data: {
				data: { board },
			},
		} = await axios.get(`${urlBase}/board/service/${activeServiceId}`);

		commit('SET_ACTIVE_BOARD', board);
	},

	async moveTask(
		{ commit, state, getters },
		{
			fromTasks,
			toTasks,
			fromTaskIndex,
			toTaskIndex,
			fromColumnIndex,
			toColumnId,
		}
	) {
		await commit('MOVE_TASK', {
			fromTasks,
			toTasks,
			fromTaskIndex,
			toTaskIndex,
			fromColumnIndex,
			toColumnId,
		});

		state.activeBoard.columns.forEach(async (column) => {
			const columnId = column._id;
			if (column.tasks !== 0) {
				const tasksIds = await getters.getTasksIds(column.tasks);
				const updatedColumn = await axios.patch(
					`${urlBase}/column/${columnId}`,
					{
						tasks: tasksIds,
					}
				);
			} else {
				const updatedEmptyColumn = await axios.patch(
					`${urlBase}/column/${columnId}`,
					{
						tasks: [],
					}
				);
			}
		});
	},

	async moveColumn({ state, dispatch }, { fromColumnIndex, toColumnIndex }) {
		const columnList = await state.activeBoard.columns;
		const columnToMove = await columnList.splice(fromColumnIndex, 1)[0];
		await columnList.splice(toColumnIndex, 0, columnToMove);
		const boardId = state.activeBoard._id;

		await dispatch(
			'columns/moveColumn',
			{ boardId, columnList },
			{ root: true }
		);
	},
};

// mutations
export const mutations = {
	SET_FETCH_BOARDS(state, boards) {
		state.allBoards = boards;
	},

	SET_ACTIVE_BOARD(state, board) {
		state.activeBoard = board;
	},

	PUSH_NEW_COLUMN(state, newColumn) {
		state.activeBoard.columns.push(newColumn);
	},

	PUSH_NEW_TASK(state, taskObject) {
		state.activeBoard.columns[taskObject.columnIndex].tasks.push(
			taskObject.taskObj
		);
	},

	SET_BOARD_TYPE(state, routeName) {
		state.boardType = routeName;
	},

	MOVE_TASK(_, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
		const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
		toTasks.splice(toTaskIndex, 0, taskToMove);
	},

	MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
		const columnList = state.activeBoard.columns;
		const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
		columnList.splice(toColumnIndex, 0, columnToMove);
	},
};
