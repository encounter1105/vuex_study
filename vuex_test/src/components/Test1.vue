<template>
    <div>
        <div>
            <h2>Page Test1</h2>
        </div>
        <div>
            <a href="javascript:" @click="changeName">udpate: 名称Name</a>  &nbsp; &nbsp;
            <a href="javascript:" @click="showName">显示更新后的Name</a> &nbsp; &nbsp;
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {}
        },
        computed: {
            ...mapState('test1', {
                state: state => state
            })
        },
        methods: {
            // test1 模块路径名
            ...mapActions('test1', [
                'udpateNameByAction'
            ]),
            changeName(){
                this["udpateNameByAction"]('ha ha test1 udpate !!')
            },
            showName(){
                console.log(this.$store.state)
            },
        },
        mounted() {
            console.log("store name: ", this.$store)
            console.log("namespace test1 state: ", this.state)
        }
    }
</script>
