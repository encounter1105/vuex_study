<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}</h3>
        <!--方式1-->
        <!--<h3>{{$store.state.count}}-{{count}}</h3>  -->
        <p>
            <button @click="$store.commit('add')">add</button>
            <button @click="$store.commit('reduce')">reduce</button>
        </p>
    </div>
</template>

<script>
    import store from '@/store/index.js'
    import {mapState} from 'vuex'
    export default {
        name: "Count",
        data(){
            return {
                msg:'Hello Vuex'
            }
        },
        // 1. 通过computed的计算属性直接赋值
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        // // 2. 通过 mapState的对象来赋值
        // computed: mapState({
        //     count:state => state.count
        // }),
        // 3. 通过 mapState数组来赋值
        computed: mapState(["count"]),
        store
    }
</script>

<style scoped>

</style>
