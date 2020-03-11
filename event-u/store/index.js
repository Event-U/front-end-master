import Vuex from 'vuex'
import events from './modules/events'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: events,
        },
        state: {
            activePage: '',
            lastPage: ''
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