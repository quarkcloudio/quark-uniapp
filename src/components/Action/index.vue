<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  label?: string
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  formType?: 'button' | 'submit' | 'reset'
  size?: 'large' | 'normal' | 'small' | 'mini'
  shape?: 'square' | 'round'
  color?: string
  plain?: boolean
  disabled?: boolean
  block?: boolean
  loading?: boolean

  openType?: string
  hoverClass?: string
  hoverStartTime?: number
  hoverStayTime?: number
  appParameter?: string
  scope?: string
  hoverStopPropagation?: boolean
  lang?: string

  sessionFrom?: string
  sendMessageTitle?: string
  sendMessagePath?: string
  sendMessageImg?: string
  showMessageCard?: boolean
  publicId?: string
  templateId?: Array<string>
  subscribeId?: string
  groupId?: string
  guildId?: string
  shareType?: string
  shareMode?: string
  ariaLabel?: string
  openId?: string
  shareMessageFriendInfo?: string
  shareMessageTitle?: string
  shareMessageImg?: string

  actionType?: string
  href?: string
  target?: string
  popup?: any
  drawer?: any
  confirmTitle?: string
  confirmText?: string
  confirmType?: string
  api?: string
  apiType?: string
  reload?: string
  withLoading?: boolean

  style?: any
  body?: any
  data?: any
  callback?: Function
}>()

const {
  label,
  type,
  formType,
  size,
  shape,
  color,
  plain,
  disabled,
  block,
  loading,
  openType,
  hoverClass,
  hoverStartTime,
  hoverStayTime,
  appParameter,
  scope,
  hoverStopPropagation,
  lang,
  sessionFrom,
  sendMessageTitle,
  sendMessagePath,
  sendMessageImg,
  showMessageCard,
  publicId,
  templateId,
  subscribeId,
  groupId,
  guildId,
  shareType,
  shareMode,
  ariaLabel,
  openId,
  shareMessageFriendInfo,
  shareMessageTitle,
  shareMessageImg,
  actionType,
  href,
  target,
  // popup,
  // drawer,
  // confirmTitle,
  // confirmText,
  // confirmType,
  // api,
  // apiType,
  // reload,
  // withLoading,
  style,
  callback,
} = toRefs(props)

function click() {
  if (actionType?.value === 'link' && href?.value) {
    switch (target?.value) {
      case 'switchTab':
        uni.switchTab({
          url: href.value,
        })
        break
      case 'reLaunch':
        uni.reLaunch({
          url: href.value,
        })
        break
      case 'redirectTo':
        uni.redirectTo({
          url: href.value,
        })
        break
      case 'navigateTo':
        uni.navigateTo({
          url: href.value,
        })
        break
      default:
        uni.navigateTo({
          url: href.value,
        })
        break
    }
    return
  }

  if (actionType?.value === 'submit')
    callback?.value?.()
}
</script>

<template>
  <nut-button
    :style="style"
    :type="type"
    :form-type="formType"
    :size="size"
    :shape="shape"
    :color="color"
    :plain="plain"
    :disabled="disabled"
    :block="block"
    :loading="loading"
    :open-type="openType"
    :hover-class="hoverClass"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    :app-parameter="appParameter"
    :scope="scope"
    :hover-stop-propagation="hoverStopPropagation"
    :lang="lang"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :public-id="publicId"
    :template-id="templateId"
    :subscribe-id="subscribeId"
    :group-id="groupId"
    :guild-id="guildId"
    :share-type="shareType"
    :share-mode="shareMode"
    :aria-label="ariaLabel"
    :open-id="openId"
    :share-message-friend-info="shareMessageFriendInfo"
    :share-message-title="shareMessageTitle"
    :share-message-img="shareMessageImg"
    @click="click"
  >
    {{ label }}
  </nut-button>
</template>

<style lang="scss"></style>
