<template>
	<FullCalendar
		defaultView="dayGridMonth"
		:plugins="calendarPlugins"
		:config="config"
		:locale="config.locale"
		:weekends="true"
		:events="events"
	/>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';

export default {
	name: 'FullCalendarsas',

	components: {
		FullCalendar,
	},

	props: {
		events: Array,
	},

	data() {
		return {
			calendarPlugins: [dayGridPlugin],
			config: {
				locale: 'es-us',
			},
		};
	},

	computed: {
		eventsWithTitle() {
			return this.events.map((event) => ({
				title: event.name,
				date: event.date,
			}));
		},
	},
};
</script>

<style lang="scss">
@import '@/style/main.css';
@import '@/style/daygrid.css';
</style>
