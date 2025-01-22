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
      <view pb-.3rem pl-.5rem pr-.5rem>
        <nut-row :gutter="0">
          <nut-col :span="12">
            <goods
              name="2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用"
              :price="199.99"
              image="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/230421/14/34568/407358/675f9389F674762f1/d39bfa8a70a57785.jpg!q70.dpg.webp"
            />
            <view v-for="(item, index) in dataList" :key="index" class="item">
              <goods
                name="2025蛇年生肖卡购物卡1000面值礼品卡/实体卡/全国通用"
                :price="199.99"
                image="//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/230421/14/34568/407358/675f9389F674762f1/d39bfa8a70a57785.jpg!q70.dpg.webp"
              />
            </view>
          </nut-col>
          <nut-col :span="12">
            <view v-for="(item, index) in dataList" :key="index" class="item" />
          </nut-col>
        </nut-row>
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
