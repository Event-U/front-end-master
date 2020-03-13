import Vuex from 'vuex'
import events from './modules/events'
import quotations from './modules/quotations'
import services from './modules/services'
import needs from './modules/needs'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: events,
            quotation: quotations,
            service: services,
            need: needs
        },
        state: {
            activePage: '',
            lastPage: '',
            activeUser: 'Jejejeje'
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