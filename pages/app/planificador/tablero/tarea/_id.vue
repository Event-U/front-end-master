<template>
	<div class="task-view container animated fadeIn">
		<div
			@click.self="close"
			class="col-6 
                d-flex 
                flex-column 
                single-task 
                animated fadeInDown"
		>
			<input
				type="text"
				class="border-0"
				v-model="task.name"
				@change="updateTask()"
			/>
			<textarea
				class="border-0"
				v-model="task.description"
				@change="updateTask()"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: 'Task',

	computed: {
		...mapState({
			task: (state) => state.task.activeTask,
		}),
	},

	data() {
		return {
			edited: false,
			name: '',
			description: '',
		};
	},

	methods: {
		close() {
			this.$emit('closeModalTask');
		},

		updateTask() {
			this.edited = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.fadeInDown {
	animation-delay: 0.5s;
}
input {
	@extend .h2-font;
	font-size: 2em;
	text-align: center;
}
.task-view {
	display: flex;
	justify-content: center;
	position: absolute;
	height: 1000px;
	flex-direction: column;
	top: 0px;
	min-width: 100%;
	background-color: #000000b3;
	align-items: center;
}
.single-task {
	box-shadow: 5px 5px 5px black;
	position: fixed;
	top: 250px;
	border-radius: 8px;
	background-color: white;
}
</style>
