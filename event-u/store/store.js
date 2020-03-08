import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            activePage: '',
        }),
        getters: {
            getActivePage: state => {
                return state.activePage
            }
        },
        mutations: {
            change: (state, name) => {
                state.activePage = name
            },
        }
    })
}
export default createStore