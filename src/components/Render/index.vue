<template>
  <view v-if="typeof body === 'string' || typeof body === 'number'">
    {{ body }}
  </view>
  <view v-else-if="body?.hasOwnProperty('component')">
    <view v-if="body.component === 'view'">
      <view :style="body.style">
        <render :body="body.body" :data="data" :callback="callback" />
      </view>
    </view>
    <view v-if="body.component === 'image'">
      <image :style="body.style" :src="body.src" />
    </view>
    <view v-if="body.component === 'icon'">
      <icon :style="body.style" :name="body.name" :color="body.color" :size="body.size" :tag="body.tag" />
    </view>
    <view v-if="body.component === 'action'">
      <action v-bind="{...body}" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'row'">
      <row :style="body.style" :type="body.type" :justify="body.justify" :align="body.align" :flexWrap="body.flexWrap" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'divider'">
      <divider :style="body.style" :dashed="body.dashed" :hairline="body.hairline" :contentPosition="body.contentPosition" :direction="body.direction" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'grid'">
      <divider :style="body.style" :columnNum="body.columnNum" :border="body.border" :gutter="body.gutter" :center="body.center" :square="body.square" :reverse="body.reverse" :direction="body.direction" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'sticky'">
      <sticky :style="body.style" :position="body.position" :top="body.top" :zIndex="body.zIndex" :parentHeight="body.parentHeight" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'elevator'">
      <elevator :style="body.style" :height="body.height" :acceptKey="body.acceptKey" :indexList="body.indexList" :isSticky="body.isSticky" :spaceHeight="body.spaceHeight" :titleHeight="body.titleHeight" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'indicator'">
      <indicator :style="body.style" :current="body.current" :size="body.size" :block="body.block" :align="body.align" :fillZero="body.fillZero" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'fixedNav'">
      <fixed-nav :style="body.style" :visible="body.visible" :navList="body.navList" :activeColor="body.activeColor" :activeText="body.activeText" :unActiveText="body.unActiveText" :type="body.type" :overlay="body.overlay" :position="body.position" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'menu'">
      <nut-menu :style="body.style" :activeColor="body.activeColor" :closeOnClickOverlay="body.closeOnClickOverlay" :scrollFixed="body.scrollFixed" :lockScroll="body.lockScroll">
        <nut-menu-item v-for="item in body" :style="item.style" :title="item.title" :options="item.options" :disabled="item.disabled" :cols="item.cols" :direction="item.direction" />
      </nut-menu>
    </view>
    <view v-if="body.component === 'tabs'">
      <tabs :style="body.style" :color="body.color" :background="body.background" :direction="body.direction" :type="body.type" :swipeable="body.swipeable" :titleScroll="body.titleScroll" :ellipsis="body.ellipsis" :animatedTime="body.animatedTime" :titleGutter="body.titleGutter" :size="body.size" :autoHeight="body.autoHeight" :name="body.name" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'form'">
      <pro-form :style="body.style" :api="body.api" :apiType="body.apiType" :modelValue="body.modelValue" :rules="body.rules" :actions="body.actions" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'page'">
      <page :style="body.style" :navbar="body.navbar" :tabbar="body.tabbar" :content="body.content" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'navbar'">
      <navbar :style="body.style" :title="body.title" :desc="body.desc" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'swiper'">
      <nut-swiper
        :style="body.style"
        :width="body.width"
        :height="body.height"
        :direction="body.direction"
        :paginationVisible="body.paginationVisible"
        :paginationColor="body.paginationColor"
        :loop="body.loop"
        :duration="body.duration"
        :autoPlay="body.autoPlay"
        :initPage="body.initPage"
        :touchable="body.touchable"
        :isPreventDefault="body.isPreventDefault"
        :isStopPropagation="body.isStopPropagation"
      >
        <nut-swiper-item v-for="item in body.body" :style="item.style">
          <render :body="item.body" :data="data" :callback="callback" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
  </view>
  <view v-else>
    <view v-for="item in body">
      <render :body="item" :data="data" :callback="callback" />
    </view>
  </view>
</template>

<script lang="ts">
export default { name: 'render' }
</script>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  body?: any,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { body, data, callback }	= toRefs(props)
</script>