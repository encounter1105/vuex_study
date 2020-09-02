<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <!--<h3>{{ $store.state.count }}</h3>-->
        <!--方式1-->
        <h3>{{$store.state.count}}-{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">add</button>
            <button @click="$store.commit('reduce')">reduce</button>
            <button @click="reduce">reduce2</button>
            <!--<button @click="addAction">addA</button>-->
            <!--<button @click="reduceAction">reduceA</button>-->

        </p>
    </div>
</template>

<script>
    import store from '@/store/index.js'
    import { mapState ,mapMutations, mapGetters, mapActions} from 'vuex'
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
        // computed:  mapState(["count"]),
        computed : {
            ...mapState(['count']),
            // count(){
            //     return this.$store.getters.count;
            // },
            ...mapGetters(['count']),
            ...mapActions(['addAction','reduceAction'])
        },
        methods: mapMutations(['add','reduce']),
        store
    }
</script>

<style scoped>

</style>
