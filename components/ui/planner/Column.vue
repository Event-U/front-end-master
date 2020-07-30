<template>
	<div
		class="col-lg-3 col-md-4 col-7 m-3 column animated fadeInUp d-flex flex-column"
		draggable
		@dragstart.self="pickColumn($event, columnIndex)"
		@drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
		@dragover.prevent
		@dragenter.prevent
	>
		<div class="column-title text-center animated fadeInDown delay-1s">
			<h3 class="mt-3">{{ column.name }}:</h3>
		</div>
		<div class="list-reset column-cards">
			<task
				v-for="(task, taskIndex) in column.tasks"
				:key="taskIndex"
				:task="task"
				:taskIndex="taskIndex"
				:column="column"
				:columnIndex="columnIndex"
				:board="board"
			/>
		</div>
		<div class="column-input">
			<input
				type="text"
				class="text-dark bg-transparent fluid p-2 d-flex new-task border-0 text-center w-100"
				placeholder="Agregar tarea +"
				@keyup.enter="createTask(column.tasks, $event)"
			/>
		</div>
	</div>
</template>

<script>
import Task from '@/components/ui/planner/Task';
import { mapMutations, mapState } from 'vuex';
import plannerMixin from '@/mixins/planner';

export default {
	components: { Task },

	mixins: [plannerMixin],

	methods: {
		createTask(tasks, e) {
			this.$store.dispatch('task/createNewTask', {
				tasks,
				name: e.target.value,
				columnIndex: this.columnIndex,
				columnId: this.column._id,
			});
			e.target.value = '';
		},

		pickColumn(e, fromColumnIndex) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.dropEffect = 'move';

			e.dataTransfer.setData('from-column-index', fromColumnIndex);
			e.dataTransfer.setData('type', 'column');
		},
	},
};
</script>

<style lang="scss" scoped>
.column-title {
	flex-basis: 10%;
}

.column-cards {
	flex-basis: 80%;
	overflow: auto;
}

.column-input {
	flex-basis: 10%;
}

justify-self-end {
	justify-self: end;
}
h3 {
	@extend .h2-font;
	font-weight: 400;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.column {
	background-color: #efefef !important;
	border-radius: 8px 8px 0px 0px;
	margin-top: 1em;
	box-shadow: $box-shadow-static;
	transition: 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.column:hover,
.task:hover {
	box-shadow: $box-shadow-hover;
	transition: 0.8s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.new-task {
	background-color: #bbbb;
	color: #3333;
}
</style>
