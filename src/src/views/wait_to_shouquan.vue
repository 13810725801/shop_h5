<template>
  <div style="padding: 50px;">
  <h3>正在跳转到授权界面...</h3>
  </div>
</template>

<script>
  export default {
    created () {
      // window.location.href = this.$store.state.web_share + "/auth/wechat"
      window.location.href = "http://localhost:8080/#/login"
    },
    components: {
    }
  }
</script>
