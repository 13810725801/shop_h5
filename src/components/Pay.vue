<template>
  <div class="background">
    <header class="top_bar">
      <a onclick="window.history.go(-1)" class="icon_back"></a>
      <h3 class="cartname">订单支付</h3>
    </header>
    <div class="tast_list_bd" style="background-color: #F3F3F3; padding-top: 0; padding-bottom: 80px;">
      <div class="goods_detail" style="">
        <main class="detail_box">
          <span class="divider"></span>
          <form style="margin-top: 45px;">
            <div class="column is-12">
              <label class="label">收货人</label>
              <p class="control has-icon has-icon-right">
                <input name="name" v-model="mobile_user_name" v-validate="'require|required'" :class="{'input': true, 'is-danger': errors.has('name')}" type="text" placeholder="例如：张三" autofocus="autofocus"/>
                <span v-show="errors.has('name')" class="help is-danger">收货人不能为空</span>
              </p>
            </div>

            <div class="column is-12">
              <label class="label">收货地址</label>
              <p class="control has-icon has-icon-right">
                <input name="url" v-model="mobile_user_address" v-validate="'required|required'" :class="{'input': true, 'is-danger': errors.has('url')}" type="text" placeholder="例如：北京市朝阳区大望路幸福里小区8栋8单元118"/>
                <span v-show="errors.has('url')" class="help is-danger">收获地址不能为空</span>
              </p>
            </div>

            <div class="column is-12">
              <label class="label">收货电话</label>
              <p class="control has-icon has-icon-right">
                <input name="phone" v-model="mobile_user_phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone')}" type="text" placeholder="例如： 18888888888"/>
                <span v-show="error.has('phone')" class="help is-danger">电话号码不能为空</span>
              </p>
            </div>
          </form>

          <span class="divider"></span>

          <section>
            <div>
              <div class="fu_li_zhuan_qu">
                <img :src="good_images[0]" class="logo_image"/>
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="logo_and_shop_name">
                    <div class="product_pric">
                      <span>￥</span>
                      <span class="rel_price"></span>
                      <span> &nbsp x </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product_info clearfix" v-else v-for="product in cartProducts">
            <div>
              <div class="fu_li_zhuan_qu">
                <img :src="product.image" class="logo_image"/>
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="logo_and_shop_name">
                    <div class="product_pric">
                      <span>￥</span>
                      <span class="rel_price"></span>
                      <span> &nbsp x </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



        </main>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pay'
  }
</script>

<style scoped>

</style>
