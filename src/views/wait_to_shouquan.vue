<template>
  <div>
    <h3>正在跳转到授权界面</h3>
  </div>
</template>

<script>
  export default {
    name: 'wait_to_shouquan',
    created () {
      window.location.href = this.$store.state.web_share + "/auth/wechat"
    },
    components: {

    }
  }
</script>

<style scoped>

</style>
