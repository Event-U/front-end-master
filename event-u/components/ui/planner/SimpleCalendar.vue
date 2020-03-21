<template>
    <FullCalendar 
        defaultView="dayGridMonth" 
        :plugins="calendarPlugins" 
        :config='config'
        :locale='config.locale'
        :weekends="true"
    />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    components: {
        FullCalendar
    },props:{
        events:[]
    },
    data() {
        return {
            calendarPlugins: [ dayGridPlugin ],
            config: {
                locale: 'es-us',
            },
        }
    }
}
</script>

<style lang="scss">
@import '@/style/main.css';
@import '@/style/daygrid.css';
</style>
