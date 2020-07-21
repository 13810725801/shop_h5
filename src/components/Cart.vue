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
  export default {
    name: 'Cart'
  }
</script>

<style scoped>

</style>
