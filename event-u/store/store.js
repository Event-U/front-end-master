import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import notifications from './modules/notifications'
import basics from './modules/basics'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        events,
        notifications,
        basics
    }
})