<template>
	<div class="container-fluid">
		<div class="row justify-content-around">
			<div class="col-md-9">
				<full-calendar :events="eventsWithTitle" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Calendario',
	data() {
		return {
			name: 'Mi calendario',
		};
	},

	mounted() {
		this.$store.commit('change', this.name);
	},

	async fetch({ store }) {
		await store.dispatch('events/fetchEvents');
	},

	computed: {
		...mapState({
			events: (state) => state.events.events,
		}),

		eventsWithTitle() {
			return this.events.map((event) => {
				return { title: event.name, date: event.date };
			});
		},
	},

	head() {
		return {
			title: 'Calendario eventos',
		};
	},
};
</script>

<style lang="scss">
.container-fluid {
	margin: 0 !important;
}
.calendar {
	max-width: 50%;
}
</style>
