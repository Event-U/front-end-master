const axios = require('axios');
const urlBase = 'http://localhost:9000';

export const state = () => ({
	tasksIdsFromNeed: [],

	activeTask: {},
});

// mutations
export const mutations = {
	PUSH_NEW_ID_TASK_FROM_NEED(state, newTaskId) {
		state.tasksIdsFromNeed.push(newTaskId);
	},
	SET_ACTIVE_TASK(state, activeTask) {
		state.activeTask = activeTask;
	},
};

// actions
export const actions = {
	async createTaskFromNeed({ commit }, newNeed) {
		const {
			data: {
				data: { task },
			},
		} = await axios.post(`${urlBase}/task`, {
			name: `Revisar cotizaciones de ${newNeed.description.toLowerCase()}`,
			description: `Revisar las cotizaciones de ${newNeed.description.toLowerCase()}`,
		});

		commit('PUSH_NEW_ID_TASK_FROM_NEED', task._id);
	},

	setActiveTask({ commit }, activeTask) {
		commit('SET_ACTIVE_TASK', activeTask);
	},

	async createNewTask({ commit, state }, taskObject) {
		commit('CLEAN_TASK_IDS');

		const tasksIds = taskObject.tasks.map((task) => task._id);

		const {
			data: {
				data: { task: newTask },
			},
		} = await axios.post(`${urlBase}/task`, {
			name: taskObject.name,
		});

		let updatedTaskId = [...tasksIds, newTask._id];

		const updatedColumn = await axios.patch(
			`${urlBase}/column/${taskObject.columnId}`,
			{
				tasks: updatedTaskId,
			}
		);

		commit(
			'board/PUSH_NEW_TASK',
			{
				taskObj: newTask,
				columnIndex: taskObject.columnIndex,
			},
			{ root: true }
		);
	},

	async updateTask(_, taskObject) {
		const updatedTask = await axios.patch(`${urlBase}/task/${taskObject._id}`, {
			name: taskObject.name,
			description: taskObject.description,
		});
	},

	async postQuotationEventTask({ dispatch, rootState }) {
		const activeEventId = rootState.event.activeEvent._id;
		await dispatch('board/getEventBoard', activeEventId, { root: true });
		const columnToUpdate = rootState.board.activeBoard.columns[0];
		const activeService = rootState.service.activeNeedService.name;
		const newTaskObject = {
			name: `Gestionar servicio de ${activeService.toLowerCase()}`,
			columnId: columnToUpdate._id,
			tasks: columnToUpdate.tasks,
		};
		dispatch('createNewTask', newTaskObject);
	},

	async postQuotationServiceTask({ dispatch, rootState }) {
		const activeServiceId = rootState.service.activeNeedService._id;
		await dispatch('board/getServiceBoard', activeServiceId, { root: true });
		const activeEvent = rootState.event.activeEvent.name;
		const columnToUpdate = rootState.board.activeBoard.columns[0];
		const newTaskObject = {
			name: `Cotización aceptada para ${activeEvent.toLowerCase()}`,
			columnId: columnToUpdate._id,
			tasks: columnToUpdate.tasks,
		};
		dispatch('createNewTask', newTaskObject);
	},
};
