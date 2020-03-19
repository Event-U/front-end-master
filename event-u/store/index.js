import Vuex from 'vuex'
import events from './modules/events'
import quotations from './modules/quotations'
import services from './modules/services'
import needs from './modules/needs'
import planner from './modules/planner'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: events,
            quotation: quotations,
            service: services,
            need: needs,
            planner: planner
        },
        state: {
            activePage: '',
            lastPage: '',
            activeUser: '5de34fe91e7f97289116ac25'
        },
        mutations: {
            change: (state, name) => {
                state.activePage = name
            },
            changeLastPage: (state, name) => {
                state.lastPage = name
            },
        }
    })
}
export default createStore