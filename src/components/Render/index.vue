<script lang="ts">
</script>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  body?: any
  data?: string | number | object
  callback?: Function | object
}>()

export default { name: 'render' }

const { body, data, callback } = toRefs(props)
</script>

<template>
  <view v-if="typeof body === 'string' || typeof body === 'number'">
    {{ body }}
  </view>
  <view v-else-if="body?.component">
    <view v-if="body.component === 'view'" :style="body.style">
      <render :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'image'">
      <image :style="body.style" :src="body.src" />
    </view>
    <view v-if="body.component === 'icon'">
      <icon :style="body.style" :name="body.name" :color="body.color" :size="body.size" :tag="body.tag" />
    </view>
    <view v-if="body.component === 'action'">
      <action v-bind="{ ...body }" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'row'">
      <row :style="body.style" :type="body.type" :justify="body.justify" :align="body.align" :flex-wrap="body.flexWrap" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'divider'">
      <divider :style="body.style" :dashed="body.dashed" :hairline="body.hairline" :content-position="body.contentPosition" :direction="body.direction" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'grid'">
      <grid :style="body.style" :column-num="body.columnNum" :border="body.border" :gutter="body.gutter" :center="body.center" :square="body.square" :reverse="body.reverse" :direction="body.direction" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'sticky'">
      <sticky :style="body.style" :position="body.position" :top="body.top" :z-index="body.zIndex" :parent-height="body.parentHeight" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'elevator'">
      <elevator :style="body.style" :height="body.height" :accept-key="body.acceptKey" :index-list="body.indexList" :is-sticky="body.isSticky" :space-height="body.spaceHeight" :title-height="body.titleHeight" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'indicator'">
      <indicator :style="body.style" :current="body.current" :size="body.size" :block="body.block" :align="body.align" :fill-zero="body.fillZero" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'fixedNav'">
      <fixed-nav :style="body.style" :visible="body.visible" :nav-list="body.navList" :active-color="body.activeColor" :active-text="body.activeText" :un-active-text="body.unActiveText" :type="body.type" :overlay="body.overlay" :position="body.position" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'menu'">
      <nut-menu :style="body.style" :active-color="body.activeColor" :close-on-click-overlay="body.closeOnClickOverlay" :scroll-fixed="body.scrollFixed" :lock-scroll="body.lockScroll">
        <nut-menu-item v-for="(item, index) in body.items" :key="index" :style="item.style" :title="item.title" :options="item.options" :disabled="item.disabled" :cols="item.cols" :direction="item.direction" />
      </nut-menu>
    </view>
    <view v-if="body.component === 'tabs'">
      <tabs :style="body.style" :color="body.color" :background="body.background" :direction="body.direction" :type="body.type" :swipeable="body.swipeable" :title-scroll="body.titleScroll" :ellipsis="body.ellipsis" :animated-time="body.animatedTime" :title-gutter="body.titleGutter" :size="body.size" :auto-height="body.autoHeight" :name="body.name" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'form'">
      <pro-form :style="body.style" :api="body.api" :api-type="body.apiType" :model-value="body.modelValue" :rules="body.rules" :actions="body.actions" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'page'">
      <page :style="body.style" :navbar="body.navbar" :tabbar="body.tabbar" :content="body.content" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'navbar'">
      <navbar :style="body.style" :title="body.title" :desc="body.desc" :body="body.body" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'tabbar'">
      <tabbar :bottom="body.bottom" :unactive-color="body.unactiveColor" :active-color="body.activeColor" :safe-area-inset-bottom="body.safeAreaInsetBottom" :placeholder="body.placeholder" :items="body.items" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'swiper'" class="mx-3.7 mb-2.5 overflow-hidden">
      <nut-swiper
        :style="body.style"
        :width="body.width"
        :height="body.height"
        :direction="body.direction"
        :pagination-visible="body.paginationVisible"
        :pagination-color="body.paginationColor"
        :loop="body.loop"
        :duration="body.duration"
        :auto-play="body.autoPlay"
        :init-page="body.initPage"
        :touchable="body.touchable"
        :is-prevent-default="body.isPreventDefault"
        :is-stop-propagation="body.isStopPropagation"
      >
        <nut-swiper-item v-for="(item, index) in body.body" :key="index" :style="item.style">
          <render :body="item.body" :data="data" :callback="callback" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
  </view>
  <view v-else>
    <view v-for="(item, index) in body" :key="index">
      <render :body="item" :data="data" :callback="callback" />
    </view>
  </view>
</template>
