<template>
    <FullCalendar 
        defaultView="dayGridMonth" 
        :plugins="calendarPlugins" 
        :config='config'
        :locale='config.locale'
        :weekends="true"
        :events="events|getTitle"
    />
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarPlugins: [ dayGridPlugin ],
            config: {
                locale: 'es-us',
            },
        }
    },
    created() {
        this.$store.dispatch('event/fetchEvents')
  },
  computed:mapState('event',['events']),
  filter:{
    getTitle:function(events) {
        return events.map((event)=>({
            title:event.name,
            date:event.date,
        }))
    },
  }
}
</script>

<style lang="scss">
@import '@/style/main.css';
@import '@/style/daygrid.css';
</style>
