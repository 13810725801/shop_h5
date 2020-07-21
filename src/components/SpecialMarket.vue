<template>
  <div>
    <div @click="show_goods_details" class="fu_li_zhuan_qu">
      <img :src="image_url" class="logo_image"/>
      <div class="content">
        <div class="title">

        </div>
        <div class="logo_and_shop_name">
          <span v-html="description"></span>
        </div>
      </div>
    </div>
    <span class="divider" style="height: 2px"></span>
  </div>
</template>

<script>
  import {go} from '../libs/router'
  export default {
    name: 'SpecialMarket',
    data () {
      return {
      }
    },
    props: {
      id: Number,
      name: String,
      description: String,
      image_url: String
    },
    mounted: {

    },
    methods: {
      show_good_details () {
        go("/shops/good_details?good_id=" + this.id, this.$router)
      }
    },
    components: {

    }
  }
</script>

<style scoped>

</style>
