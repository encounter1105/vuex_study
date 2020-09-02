import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         count: 1
//     },
//     getters: {
//         count: state => state.count += 100
//     },
//     mutations: {
//         add(state,n){
//             state.count += n;
//         },
//         reduce(state){
//             state.count--;
//         }
//     },
//     actions: {
//         addAction(context){
//             context.commit('add',10);
//             setTimeout(()=>{context.commit('reduce')},5000);
//             console.log('我比reduce先执行了');
//         },
//         reduceAction({commit}){
//             commit('reduce')
//         }
//     }
// })
//
//
// export default store

//modules 模块组
const test1 = {
    // namespaced: true,
    state: {
        name: 'moduleA',
        type: 'module A'
    },
    mutations: {
        updateNameByMutation(state, appendStr){
            state.name = state.name + " append Str: " + appendStr
        }
    },
    actions: {
        udpateNameByAction({commit}, appendStr) {
            commit("updateNameByMutation", appendStr)
        }
    },
    getters: {
        getNameA(state){
            return state.name
        }
    }
}
const test2 = {
    // 当namespaced=true 时， vuex, 将会自动给各自module 添加访问路径名。 方便区分moduel
    // namespaced: true,
    state:{
        name: 'moduleB',
        type: 'module B'
    },
    mutations: {
        updateNameByMutation(state, appendStr){
            state.name = state.name + " append Str: " + appendStr
        }
    },
    actions: {
        // 如果不使用命名空间， 那么view 指向actions 的该方法时，会执行所有与指定action名相同的函数（即：这里module A,B 中该action都会执行）
        udpateNameByAction({commit}, appendStr){
            commit("updateNameByMutation", appendStr)
        }
    },
    getters: {
        getNameB(state){
            return state.name
        }
    }
}

const storeInstall =  new Vuex.Store({
    state: {
        name: 'i am root state name'
    },
    modules:{
        // 这里的路径名： test1, test2, 在view 中 通过 mapActions('test1', [actionName]) 使用并区分需要使用的module
        test1,
        test2
    }
})

export default storeInstall


