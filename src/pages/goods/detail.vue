<script setup lang="ts">
const state = reactive({
  page: 0,
  current: 1,
})

const systemInfo = uni.getSystemInfoSync()

function change(index: number) {
  state.current = index + 1
}
</script>

<template>
  <view class="mod_slider">
    <nut-swiper :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="3000" @change="change">
      <nut-swiper-item>
        <img :width="systemInfo.screenWidth" :height="systemInfo.screenWidth" src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/257021/35/15106/41097/679227dbF8e0d2d26/888460e3ac569342.jpg" alt="">
      </nut-swiper-item>
      <nut-swiper-item>
        <img :width="systemInfo.screenWidth" :height="systemInfo.screenWidth" src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/267354/10/15059/106165/67922569F32e5d47b/fbaa1c0720121fd8.jpg" alt="">
      </nut-swiper-item>
      <nut-swiper-item>
        <img :width="systemInfo.screenWidth" :height="systemInfo.screenWidth" src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/253595/4/15772/78836/679227feFfd33f67c/36b11ebbc38578d1.jpg" alt="">
      </nut-swiper-item>
      <template #page>
        <div class="indicator_wrap">
          {{ state.current }}/3
        </div>
      </template>
    </nut-swiper>
  </view>
  <view class="buy_area">
    <view class="price_wrap">
      <span class="price">￥<em>{{ 1000 }}</em><span class="price_decimals">.00</span></span>
    </view>
    <view class="fn_wrap">
      <view class="fn_goods_name">
        HUAKIN2025学习机官方补贴热卖第1名小学到高中课程同步1-12年级儿童4K级护眼
      </view>
    </view>
  </view>
  <view class="item_floor">
    <view class="sku_window">
      <view class="sku_choose_info">
        <view class="sku_choose_info_title">
          已选
        </view>
        <view class="sku_choose">
          16+512G丨4K护眼屏+10亿题库+双系统，1个
        </view>
      </view>
    </view>
  </view>
  <view class="detail_info_wrap">
    这里是测试内容
  </view>
  <view class="de_btn_wrap">
    <view class="de_btn_bar">
      <view class="icon_btn icon_shop">
        <view class="icon">
          <nut-icon name="home" color="#666" size="35" />
        </view>
        <view class="txt">
          首页
        </view>
      </view>
      <view class="icon_btn icon_shop">
        <view class="icon">
          <nut-icon name="cart" color="#666" size="35" />
        </view>
        <view class="txt">
          购物车
        </view>
      </view>
      <view class="btn_group">
        <view class="de_row">
          <view class="left_btn">
            <nut-button block type="primary">
              加入购物
            </nut-button>
          </view>
          <view class="right_btn">
            <nut-button block type="warning">
              立即购买
            </nut-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.buy_area {
  background: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
}
.indicator_wrap {
  border-radius: 10px 0 0 10px;
  bottom: 15px;
  color: #fff;
  font-size: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  position: absolute;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, .2);
}
.price_wrap {
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 5px;
  padding: 0 18px;
  margin-bottom: 0;
  margin-top: 12px;
  position: relative;
}
.price {
  color: #ff0f23;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  & em {
    font-size: 24px;
    font-style: normal;
  }
}
.price_decimals {
  font-size: 12px;
}
.fn_wrap {
  padding: 12px 18px;
  position: relative;
  overflow: hidden;
}
.fn_goods_name {
  align-items: center;
  display: flex;
  min-height: 36px;
  padding-right: 52px;
  font-weight: 700;
  line-height: 21px;
  padding-right: 0;
  position: relative;
  color: #262626;
}
.item_floor {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  overflow: hidden;
  padding: 0 18px;
}
.sku_window {
  background: #fff;
  color: #8c8c8c;
  font-size: 13px;
  padding: 18px 0;
  position: relative;
}
.sku_choose_info{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding: 0 40px 0 38px;
}
.sku_choose_info_title{
  color: #262626;
    font-weight: 700;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
}
.sku_choose{
  color: #333;
  font-size: 13px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
}
.sku_window:after {
  background: url(static/images/icons.png) no-repeat;
  background-position: -386px -40px;
  display: inline-block;
  height: 40px;
  position: absolute;
  transform: scale(.5) translate(20px, -10px);
  -webkit-transform: scale(.5) translate(20px, -10px);
  width: 40px;
  content: "";
  right: 0;
  top: 12px;
}
.detail_info_wrap{
  margin-top: 15px;
  background: #fff;
  height: 400px;
  margin-bottom: 56px;
  overflow: hidden;
  position: relative;
}
.de_btn_wrap{
  bottom: 0;
  left: 0;
  margin: 0 auto;
  max-width: 540px;
  position: fixed;
  right: 0;
  display: flex;
  & .icon_btn {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 4em;
    position: relative;
    text-align: center;
    top: -4px;
    width: 14%;
    & .txt {
      color: #262626;
      display: block;
      font-size: 9px;
      line-height: 9px;
      margin-top: 6px;
      position: relative;
      top: -11px;
    }
  }
  & .btn_group {
    height: 50px;
    position: relative;
    display: block;
    flex: 1;
    width: 100%;
  }
}
.de_btn_bar{
  background-color: #fff;
  height: 50px;
  position: relative;
  display: flex;
  width: 100%;
}
.de_row{
  display: flex;
}
.left_btn{
  flex: 1;
  margin: 6px 5px 0 0;
}
.right_btn{
  flex: 1;
  margin: 6px 5px 0 0;
}
.icon{
  display: block;
  flex: none;
  height: 44px;
  position: relative;
  transform: scale(.46);
  -webkit-transform: scale(.46);
  width: 44px;
}
</style>

<route lang="yaml">
style:
  navigationBarTitleText: "商品详情"
</route>
