<template>
  <div class="background">
    <div id="my_cart">
      <CartHeadView></CartHeadView>
      <CartMainView></CartMainView>
      <NavBottonView :is_cart="is_cart"></NavBottonView>
    </div>
  </div>
</template>

<script>
  import CartHeaderView from './CartHeader.vue';
  import CartMainView from './CartMain.vue';
  import NavBottomView from './NavBottom.vue';

  export default {
    name: 'Cart',
    data () {
      return {
        is_cart:true
      }
    },
    mounted(){

    },
    components:{
      CartHeaderView,
      CartMainView,
      NavBottomView
    }
  }
</script>

<style scoped>

</style>
