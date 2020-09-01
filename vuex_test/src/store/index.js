import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        count: state => state.count += 100
    },
    mutations: {
        add(state,n){
            state.count += n;
        },
        reduce(state){
            state.count--;
        }
    },
    actions: {
        addAction(context){
            context.commit('add',10);
            setTimeout(()=>{context.commit('reduce')},5000);
            console.log('我比reduce先执行了');
        },
        reduceAction({commit}){
            commit('reduce')
        }
    }
})


export default store

