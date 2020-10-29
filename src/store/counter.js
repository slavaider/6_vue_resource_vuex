export default {
    state: {
        counter: 0
    },
    getters: {
        computed_counter(state) {
            return state.counter * 10
        }
    },
    mutations: {
        changeCounter(state, payload) {
            state.counter += payload
        }
    },
    actions: {
        async_changeCounter({commit}, payload) {
            setTimeout(() => {
                commit('changeCounter', payload.counterValue)
            }, payload.Delay)
        }
    }
}
