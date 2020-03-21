<template>
    <FullCalendar 
        defaultView="dayGridMonth" 
        :plugins="calendarPlugins" 
        :weekends="false"
        :events="[
            { title: 'Event', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
        ]"
    />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarPlugins: [ dayGridPlugin ]
        }
    }
}
</script>

<style lang="scss">
@import '@/style/main.css';
@import '@/style/daygrid.css';
</style>
