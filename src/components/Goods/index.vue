<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = withDefaults(defineProps<{
  name?: string
  nameIcon?: string
  pricePrefix?: string
  price?: number
  showProtection?: boolean
  showLogistics?: boolean
  isSelfOperated?: boolean
  lowestPriceText?: string
  fullReductionText?: string
  promotionText?: string
  image?: string
  comment?: number
  commentText?: string
  feedBackText?: string
  feedBackHref?: string
  style?: any
}>(), {
  name: '',
  nameIcon: '',
  pricePrefix: '￥',
  price: 0.00,
  showProtection: false,
  showLogistics: false,
  isSelfOperated: false,
  lowestPriceText: '',
  fullReductionText: '',
  promotionText: '',
  image: '',
  commentText: '条评论',
  feedBackText: '',
  feedBackHref: '',
  style: {},
})

const { name, nameIcon, pricePrefix, price, image, comment, commentText, feedBackText, feedBackHref, showProtection, showLogistics, lowestPriceText, fullReductionText, promotionText, style } = toRefs(props)

const priceIntegerPart = computed(() => {
  return price?.value?.toString().split('.')[0] || '0'
})
const priceDecimalPart = computed(() => {
  return price?.value?.toString().split('.')[1] || '00'
})
const commentNum = computed(() => {
  if (!comment?.value)
    return '0'

  if (comment?.value >= 100 && comment?.value < 10000)
    return `${comment?.value?.toString()}+`
  else if (comment?.value >= 10000)
    return `${Math.floor(comment.value / 10000).toString()}万+`
  else
    return comment?.value
})

function navigateToDetail() {
  uni.navigateTo({
    url: feedBackHref.value,
  })
}
</script>

<template>
  <view :style="style">
    <view class="goods">
      <view class="goods_img bg_stamp">
        <view class="img_box">
          <view class="img_pendant" />
          <img class="shop_img" :src="image">
        </view>
      </view>
      <view class="goods_info">
        <view class="goods_name">
          <view v-if="nameIcon" class="goods_name_icons">
            <view class="goods-goods-tags goods-tags--before-title">
              <img class="goods-tags__item goods-tags__item--2006" :src="nameIcon" style="width: 2.2rem; height: 0.7rem;">
            </view>
          </view>
          {{ name }}
        </view>
        <view v-if="showProtection || lowestPriceText" class="goods_row_title_bottom">
          <img v-if="showProtection" class="goods-tags__item goods-tags__item--2006" src="/static/images/goods_protection_icon.png" style="width: 2.775rem; height: 0.8rem;">
          <view v-if="lowestPriceText" class="goods-tags__item goods-tags__item--2021">
            <img class="goods-tags__item--icon" src="/static/images/goods_discount_icon.png" style="width: 0.6rem; height: 0.6rem;">
            <view class="goods-tags__item--text">
              {{ lowestPriceText }}
            </view>
          </view>
        </view>
        <view class="goods_row">
          <view class="goods_price">
            {{ pricePrefix }}<em class="goods_price-int">{{ priceIntegerPart }}</em> .{{ priceDecimalPart }}
          </view>
          <view v-if="fullReductionText" class="goods-tags__item goods-tags__item--2008">
            <view class="goods-tags__item--text">
              {{ fullReductionText }}
            </view>
          </view>
          <view v-if="promotionText" class="goods-tags__item goods-tags__item--2009">
            <view class="goods-tags__item--text">
              {{ promotionText }}
            </view>
          </view>
        </view>
        <view v-if="showLogistics || isSelfOperated || comment || feedBackText" class="goods_row_bottom">
          <img v-if="showLogistics" class="goods-tags__item goods-tags__item--2006" src="/static/images/goods_logistics_icon.png" style="width: 2.2rem; height: 0.7rem;">
          <img v-if="isSelfOperated" class="goods-tags__item goods-tags__item--2006" src="/static/images/goods_self_operated_icon.png" style="width: 1.2rem; height: 0.7rem;">
          <view v-if="comment" class="goods-tags__item goods-tags__item--2011">
            <view class="goods-tags__item--text">
              {{ commentNum + commentText }}
            </view>
          </view>
        </view>
        <view v-if="feedBackText" class="feed_back" @click="navigateToDetail">
          {{ feedBackText }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .goods{
    display: block;
    width: 100%;
    background: #ffffff;
    border-radius: 0.4rem;
    overflow: hidden;
    position: relative;
    .bg_stamp {
      background: #fff url('/static/images/goods_loading.png');
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 8.625rem;
    }
  }
  .goods_img{
    margin-bottom: 0.25rem;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    .img_box{
      position: relative;
      width: 100%;
      padding-top: 100%;
      .img_pendant{
        position: absolute;
        z-index: 1;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
      }
      .shop_img{
        position: absolute;
        z-index: 0;
        top: 0%;
        left: 0%;
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
    }
  }
  .goods_info{
    padding: 0 0.5rem 0.5rem;
  }
  .goods_name{
    text-align: left;
    line-height: 1.05rem;
    height: 2.1rem;
    font-size: 0.7rem;
    font-family: -apple-system, Helvetica, sans-serif;
    overflow: hidden;
    color: #434343;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }
  .goods_row{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 1.5rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .goods_price{
    font-style: normal;
    font-family: JDZH-Regular, sans-serif;
    display: inline-block;
    font-size: 0.7rem;
    line-height: 1.5rem;
    color: #ff4142;
  }
  .goods_price-int{
    font-size: 1rem;
    font-style: normal;
  }
  .goods_row_bottom{
    width: calc(100% - 2.5rem);
    height: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .goods-tags__item{
    font-size: 0.6rem;
  }
  .goods-tags__item:first-child{
    margin-right: 0.025rem;
  }
  .goods-tags__item--2006 {
    display: block;
    margin-right: 0 !important;
  }
  .goods-tags__item:not(:first-child) {
    margin-left: 0.3rem;
    margin-right: 0.025rem;
  }
  .goods-tags__item--2011{
    max-width: 100%;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.6rem;
  }
  .goods-tags__item--text{
    max-width: 100%;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.6rem;
  }
  .feed_back{
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    background: #f2f2f2;
    color: #262626;
    font-size: 0.55rem;
    width: 2.5rem;
    height: 1rem;
    border-radius: 0.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .goods_row_title_bottom{
    height: 1.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .goods-tags__item--2021{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 0.1rem;
    border-radius: 0.1rem;
    background: rgba(255, 32, 120, 0.07);
    .goods-tags__item--text{
      margin-left: 0.1rem;
      color: #ff2078;
    }
  }
  .goods-tags__item--2008 {
    position: relative;
    .goods-tags__item--text{
      padding: 0px 0.25rem 0px 0.35rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 0.5rem;
      color: #ff4142;
      font-family: 'JDZH-Regular', sans-serif;
    }
  }
  .goods-tags__item--2008::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff4142;
    -webkit-mask-box-image-source: url('/static/images/goods_tag_icon.png');
    mask-border-source: url('/static/images/goods_tag_icon.png');
    -webkit-mask-box-image-slice: 2 10 2 16;
    mask-border-slice: 2 10 2 16;
    -webkit-mask-box-image-width: 1px 5px 1px 8px;
    mask-border-width: 1px 5px 1px 8px;
    -webkit-mask-box-image-repeat: stretch stretch;
    mask-border-repeat: stretch stretch;
    -webkit-mask-border-source: url('/static/images/goods_tag_icon.png');
    -webkit-mask-border-slice: 2 10 2 16;
    -webkit-mask-border-width: 1px 5px 1px 8px;
    -webkit-mask-border-repeat: stretch stretch;
  }
  .goods_name_icons{
    position: relative;
    top: -0.05rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.25rem;
  }
  .goods-tags{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
  .goods-tags--before-title {
    font-size: 0.6rem;
  }
  .goods-tags__item--2009{
    position: relative;
    .goods-tags__item--text{
      padding: 0px 0.125rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 0.5rem;
      color: #ff4142;
      font-family: 'JDZH-Regular', sans-serif;
    }
  }
  .goods-tags__item--2009::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ff4142;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    border-radius: 0.25rem;
  }
</style>
