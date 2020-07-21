<template>
  <main class="cart_box">
    <p v-show="!products.length"><i>请选择商品加入到购物车</i></p>
    <div class="cart_content clearfix" v-for="item in products" style="position: relative;">
      <div class="cart_shop clearfix">
        <div class="cart_check_box">
          <div class="check_box" checked>
          </div>
        </div>
        <div class="shop_info clearfix">
          <span class="shop_name" style="font-size: 14px;">丝路乐购新疆商城</span>
        </div>
      </div>

      <div @click="find_item_id(item)" class="cart_del clearfix" style="display: inline-block; position: absolute; top: 10px; right: 10px;">
        <div class="del_top">
        </div>
        <div class="del_bottom">
        </div>
      </div>
      <div class="cart_item">
        <div class="cart_item_box">
          <div class="check_box">
          </div>
        </div>
        <div class="cart_detail_box clearfix">
          <a class="cart_product_link">
            <img :src="item.image" alt=""/>
          </a>
          <div class="item_names">
            <a>
              <span></span>
            </a>
          </div>
          <div class="cart_weight">
            <span class="my_color" style="color: #979292"></span>
          </div>
          <div class="cart_product_sell">
            <span class="product_money">￥<strong class="real_money"></strong></span>
            <div class="cart_add clearfix">
              <span @click="minus(item.id)" class="my_jian">-</span>
              <input type="tel" class="my_count" :value="item.quantity"/>
              <span @click="add(item.id)" class="my_add">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pop" style="display: none">
      <div class="pop_box">
        <div class="del_info">
          确定瑶删除该商品吗？
        </div>
        <div class="del_cancel">
          取消
        </div>
        <div @click="deleteItem" class="del_ok">
          确定
        </div>
      </div>
    </div>

    <div class="cart_fo">
      <footer class="cart_footer">
        <div class="count_money_box">
          <div class="heji">
            <strong>合计：</strong>
            <strong style="color: #ff621a; font-size: 18px;">\{\{total|currency}}</strong>
          </div>
          <a :disabled="!products.length" @click="checkout(products)" class="go_pay">
            <span style="color: #f5f5f5; font-weight: 600;">结算</span>
          </a>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {go} from '../libs/router'
  import {check,animatDelBox} from '../assets/js/cart.js'
  export default {
    name: 'CartMain',
    data () {
      return{
        need_delete_item: {},
        cartDatas: [],
      }
    },
    mounted () {
      check();
      animatDelBox();
    },
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total () {
        return this.products.reduce((total, item) => {
          return total + item.price * item.quantity
        }, 0)
      }
    },
    methods: {
      // 跳转到支付页面
      checkout (products) {
        go("/shops/dingdanzhifu", this.$router)
      },

      //对于商品的数量进行增加
      add(id){
        this.$store.dispatch('changeItemNumber', {id, type: 'add'})
      },

      //对于商品的数量进行减少
      minus (id) {
        this.$store.dispatch('changeItemNumber', {id, type: 'minus'})
      },

      //删除某个商品
      deleteItem () {
        this.$store.dispatch('deleteItem', this.need_delete_item.id)
      },

      find_item_id (item) {
        this.need_delete_item = item
      }
    }
  }
</script>

<style scoped>

</style>
