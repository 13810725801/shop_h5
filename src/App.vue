<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { SET_BASEINFO, GET_BASEINFO } from './vuex/mutation_types'

  export default {
    name: 'App',
    store,
    data () {
      return {
        user_info: {
          open_id: this.$route.query.open_id
        }
      }
    },
    mounted () {
      store.dispatch(SET_BASEINFO, {open_id: 'dsfdfweqsdfasdf'})

      if(this.user_info.open_id){
        store.dispatch(SET_BASEINFO, this.user_info)
      }else{
        store.dispatch(SET_BASEINFO)
        if(store.state.user_info.open_id === undefined){
          console.info('用户id和open_id不存在，跳转到授权等待页面')
          this.$route.push({name: 'wait_to_shouquan'})
        }else{
          console.info('已经有BASEINFO')
        }
      }
    },
    watch: {
      '$route' (val) {

      }
    },
    methods: {

    },
    components: {
      
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
