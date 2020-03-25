import Vuex from 'vuex'
import events from './modules/events'
import quotations from './modules/quotations'
import services from './modules/services'
import needs from './modules/needs'
import board from './modules/board'
import task from './modules/task'
import columns from './modules/columns'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: events,
            quotation: quotations,
            service: services,
            need: needs,
            board: board,
            task: task,
            columns: columns,
        },
        state: {
            activePage: '',
            lastPage: '',
            activeUser: '5de375dca3a7ba6a659fb84f'
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