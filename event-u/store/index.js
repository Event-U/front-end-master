import Vuex from 'vuex'
import events from './modules/events'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: events,
        },
        state: {
            activePage: '',
        },
        mutations: {
            change: (state, name) => {
                state.activePage = name
            },
        }
    })
}
export default createStore