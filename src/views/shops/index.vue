<template>
  <div class="background">
    <div class="home">
      <div class="m_layout">
        <!--轮播图-->
        <HomeBannerView></HomeBannerView>
        <!--导航-->
        <HomeNavView></HomeNavView>
        <span class="divider" style="height: 4px"></span>
        <div class="product_top">
          <div class="product_left">
            <div>商品列表</div>
          </div>
        </div>
        <span class="divider" style="height: 2px;"></span>
        <!--特定商品-->
        <SpecialMarket :id="good.id" :name="good.name" :description="good.description" :image_url="good.image_url"
                       v-for="good in goods"></SpecialMarket>
      </div>
    </div>
    <NavBottomView :is_shops_index="is_shops_index"></NavBottomView>
  </div>
</template>

<script>
  // 轮播图需要的js文件
  import { bindEvent, scrollPic } from '../../libs/index.js'
  // 轮播图需要的前台文件
  import HomeBannerView from '../../components/HomeBanner.vue'
  // 商品分类
  import HomeNavView from '../../components/HomeNav.vue'
  // 特产，商品列表
  import SpecialMarket from '../../components/SpecialMarket.vue'
  // 底部4个TAB
  import NavBottomView from '../../components/NavBottom.vue'

  export default {
    name: 'index',
    data () {
      return {
        goods: [],
        is_shops_index: true
      }
    },
    components: {
      HomeHeaderView,
      HomeBannerView,
      HomeNavView,
      HomeMainView,
      SpecialMarket,
      NavBottomView
    },
    mounted () {
      scrollPic()
      this.loadPage()
    },
    computed: {},
    methods: {
      loadPage () {
        this.$http.get(this.$configs.api + 'goods/get_goods').then((response) => {
          console.info(response.body)
          this.goods = response.body.goods
        }, (error) => {
          console.error(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
