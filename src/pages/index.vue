<script setup lang="ts">
// const defaultUrl = import.meta.env.VITE_DEFAULT_URL
import { ref } from 'vue'
import { get } from '~/services/action'
const paging: any = ref(null)
// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
const dataList: any = ref([])

// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用paging.value.reload()即可
function queryList(pageNo: any, pageSize: any) {
  get({ url: `/api/miniapp/item/getList?page=${pageNo}&pageSize=${pageSize}` })
  paging.value.complete(false)
}
</script>

<template>
  <view>
    <nut-searchbar
      background="#ff5454"
      input-background="#fff"
    >
      <template #leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
    <z-paging ref="paging" v-model="dataList" style="margin-top: 49px;background-color: #f6f6f6;" @query="queryList">
      <view pb-.3rem pl-.5rem pr-.5rem pt-.3rem style="background: linear-gradient(180deg, #ff5454 .63%, #f4f4f4 80.65%);">
        <nut-swiper h-8.2rem overflow-hidden rounded-2xl :init-page="0" :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="3000">
          <nut-swiper-item>
            <img width="100%" src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="">
          </nut-swiper-item>
          <nut-swiper-item>
            <img width="100%" src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="">
          </nut-swiper-item>
        </nut-swiper>
      </view>
      <view pb-.3rem pl-.5rem pr-.5rem pt-.3rem>
        <nut-swiper h-6rem overflow-hidden rounded-2xl :init-page="0" :loop="false" :pagination-visible="true" pagination-color="#fa2c19" pagination-unselected-color="#0000000f" auto-play="0">
          <nut-swiper-item class="nav-swiper-item">
            <nut-grid>
              <nut-grid-item text="京东超市">
                <img src="//img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png">
              </nut-grid-item>
              <nut-grid-item text="京东电器">
                <img src="//m.360buyimg.com/babel/jfs/t20270715/237082/37/21845/7616/6694edddFc764124a/38d00b686257b0f4.png">
              </nut-grid-item>
              <nut-grid-item text="服饰美妆">
                <img src="//img20.360buyimg.com/babel/jfs/t20270715/36751/25/21385/7651/6694ee02F878cddef/13ce837dd39ad1ad.png">
              </nut-grid-item>
              <nut-grid-item text="充值中心">
                <img src="//img20.360buyimg.com/babel/jfs/t20270715/44839/8/24550/7935/6694ee27F8775a577/b63c6a2fa0327964.png">
              </nut-grid-item>
            </nut-grid>
          </nut-swiper-item>
          <nut-swiper-item class="nav-swiper-item">
            <nut-grid>
              <nut-grid-item text="新品生鲜">
                <img src="//m.360buyimg.com/babel/jfs/t20270715/22456/27/20943/10381/6694ee81F684396bb/0ba51f592d28dfdd.png">
              </nut-grid-item>
              <nut-grid-item text="京东国际">
                <img src="//img11.360buyimg.com/babel/jfs/t20270715/29760/28/21267/11992/6694eea3F0fe3dca2/d5672661722bfc42.png">
              </nut-grid-item>
              <nut-grid-item text="京东拍卖">
                <img src="//img10.360buyimg.com/babel/jfs/t20270715/233990/3/23983/8102/6694eec4F2aad82cf/2144631769da49b9.png">
              </nut-grid-item>
              <nut-grid-item text="全部">
                <img src="//img14.360buyimg.com/babel/jfs/t20270715/42046/6/20985/8690/6694ef01Ff3769032/bfa11aada78ce515.png">
              </nut-grid-item>
            </nut-grid>
          </nut-swiper-item>
        </nut-swiper>
      </view>
      <view pb-.3rem pl-.5rem pr-.5rem pt-.3rem>
        <view v-for="(item, index) in dataList" :key="index" class="item">
          <nut-row :gutter="0">
            <nut-col :span="12">
              <view p-.25rem>
                <view relative block w-full overflow-hidden rounded-0.4rem bg-white>
                  <view relative mb-0.25rem overflow-hidden>
                    <view relative w-full pt-full>
                      <view absolute left-0 top-0 z1 h-full w-full />
                      <img absolute left-0 top-0 z0 block h-auto w-full src="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/230421/14/34568/407358/675f9389F674762f1/d39bfa8a70a57785.jpg!q70.dpg.webp">
                    </view>
                  </view>
                  <view pb-.5rem pl-0.5rem pr-.5rem>
                    <view style="text-align: left;line-height: 1.05rem;height: 2.1rem;font-size: 0.7rem;font-family: -apple-system, Helvetica, sans-serif;overflow: hidden;color: #434343;text-overflow: ellipsis;display: -webkit-box;word-break: break-all;-webkit-box-orient: vertical;">
                      2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用
                    </view>
                    <view
                      style="display: -webkit-box;
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
                      overflow: hidden;"
                    >
                      <view
                        style="font-style: normal;
                        font-family: sans-serif;
                        display: inline-block;
                        font-size: 0.7rem;
                        line-height: 1.5rem;
                        color: #ff4142;"
                      >
                        ￥<em style="font-size: 1rem;font-style: normal">2000</em> .00
                      </view>
                    </view>

                    <view
                      style="width: calc(100% - 2.5rem);
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
                  "
                    >
                      <img class="goods-tags__item goods-tags__item--2006" src="https://storage.360buyimg.com/jxfe/ppms/c/202411/19/5e3e0db9-7d02-4879-b53e-e855c6ed06b0.png" style="width: 1.2rem; height: 0.7rem;">
                      <view style="margin-left: 0.3rem;margin-right: 0.025rem;">
                        <view
                          style="max-width: 100%;
                        color: #999;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 0.6rem;"
                        >
                          2万+条评论
                        </view>
                      </view>
                    </view>

                    <view
                      style="position: absolute;
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
                    align-items: center;"
                    >
                      看相似
                    </view>
                  </view>
                </view>
              </view>

              <view p-.25rem>
                <view relative block w-full overflow-hidden rounded-0.4rem bg-white>
                  <view relative mb-0.25rem overflow-hidden>
                    <view relative w-full pt-full>
                      <view absolute left-0 top-0 z1 h-full w-full />
                      <img absolute left-0 top-0 z0 block h-auto w-full src="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/224681/38/4137/182540/655c186bF401a9e33/f0f20de814087866.jpg!q70.dpg.webp">
                    </view>
                  </view>
                  <view pb-.5rem pl-0.5rem pr-.5rem>
                    <view style="text-align: left;line-height: 1.05rem;height: 2.1rem;font-size: 0.7rem;font-family: -apple-system, Helvetica, sans-serif;overflow: hidden;color: #434343;text-overflow: ellipsis;display: -webkit-box;word-break: break-all;-webkit-box-orient: vertical;">
                      2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用
                    </view>
                    <view
                      style="display: -webkit-box;
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
                      overflow: hidden;"
                    >
                      <view
                        style="font-style: normal;
                        font-family: sans-serif;
                        display: inline-block;
                        font-size: 0.7rem;
                        line-height: 1.5rem;
                        color: #ff4142;"
                      >
                        ￥<em style="font-size: 1rem;font-style: normal">2000</em> .00
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </nut-col>
            <nut-col :span="12">
              <view p-.25rem>
                <view relative block w-full overflow-hidden rounded-0.4rem bg-white>
                  <view relative mb-0.25rem overflow-hidden>
                    <view relative w-full pt-full>
                      <view absolute left-0 top-0 z1 h-full w-full />
                      <img absolute left-0 top-0 z0 block h-auto w-full src="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/220889/40/51738/94366/67540690Fd7ef5554/32921c2203de9bb4.jpg!q70.dpg.webp">
                    </view>
                  </view>
                  <view pb-.5rem pl-0.5rem pr-.5rem>
                    <view style="text-align: left;line-height: 1.05rem;height: 2.1rem;font-size: 0.7rem;font-family: -apple-system, Helvetica, sans-serif;overflow: hidden;color: #434343;text-overflow: ellipsis;display: -webkit-box;word-break: break-all;-webkit-box-orient: vertical;">
                      2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用
                    </view>
                    <view
                      style="display: -webkit-box;
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
                      overflow: hidden;"
                    >
                      <view
                        style="font-style: normal;
                        font-family: sans-serif;
                        display: inline-block;
                        font-size: 0.7rem;
                        line-height: 1.5rem;
                        color: #ff4142;"
                      >
                        ￥<em style="font-size: 1rem;font-style: normal">2000</em> .00
                      </view>
                    </view>
                  </view>
                </view>
              </view>

              <view p-.25rem>
                <view relative block w-full overflow-hidden rounded-0.4rem bg-white>
                  <view relative mb-0.25rem overflow-hidden>
                    <view relative w-full pt-full>
                      <view absolute left-0 top-0 z1 h-full w-full />
                      <img absolute left-0 top-0 z0 block h-auto w-full src="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/267722/2/5497/209604/677245baFeed19e8f/0a7504e6bd7e412a.jpg!q70.dpg.webp">
                    </view>
                  </view>
                  <view pb-.5rem pl-0.5rem pr-.5rem>
                    <view style="text-align: left;line-height: 1.05rem;height: 2.1rem;font-size: 0.7rem;font-family: -apple-system, Helvetica, sans-serif;overflow: hidden;color: #434343;text-overflow: ellipsis;display: -webkit-box;word-break: break-all;-webkit-box-orient: vertical;">
                      2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用
                    </view>
                    <view
                      style="display: -webkit-box;
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
                      overflow: hidden;"
                    >
                      <view
                        style="font-style: normal;
                        font-family: sans-serif;
                        display: inline-block;
                        font-size: 0.7rem;
                        line-height: 1.5rem;
                        color: #ff4142;"
                      >
                        ￥<em style="font-size: 1rem;font-style: normal">2000</em> .00
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </nut-col>
          </nut-row>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<style lang="scss">
  .nav-swiper-item {
    img {
      width: 45%;
    }
  }
</style>
