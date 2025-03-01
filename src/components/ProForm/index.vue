<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { get, post } from '~/api/action'

// 组件属性
const props = defineProps<{
  api?: string
  apiType?: string
  modelValue?: object
  rules?: any
  actions?: Array<any>
  style?: any
  body?: any
  data?: any
  callback?: Function | object
}>()

const { api, apiType, modelValue, rules, style, body, data } = toRefs(props)

// 获取表单的键值对
function getFieldValues(formFields: any) {
  const items: any = {}
  formFields.forEach((value: any) => {
    items[value.name] = value.value
  })
  return items
}

const fields: any = reactive({})
const fieldValues = getFieldValues(body.value)
const fieldKeys = Object.keys(fieldValues)

fieldKeys.forEach((fieldKey) => {
  if (modelValue?.value) {
    if (Object.prototype.hasOwnProperty.call(modelValue.value, fieldKey)) {
      const getModelValue: any = modelValue.value
      fields[fieldKey] = getModelValue[fieldKey]
    }
    else {
      fields[fieldKey] = fieldValues[fieldKey]
    }
  }
  else {
    fields[fieldKey] = fieldValues[fieldKey]
  }
})

// 提交表单
async function submit() {
  let result: any = {}
  if (apiType?.value === 'POST') {
    result = await post({
      url: api?.value,
      data: fields,
    })
  }
  else {
    result = await get({
      url: api?.value,
      data: fields,
    })
  }

  if (!result) {
    uni.showToast({
      title: '接口错误！',
      icon: 'error',
    })
    return
  }

  if (result.status === 'error') {
    uni.showToast({
      title: result.msg,
      icon: 'error',
    })
    return
  }

  uni.showToast({
    title: result.msg,
  })

  if (result.url !== '') {
    uni.navigateTo({
      url: result.url,
    })
  }
}
</script>

<template>
  <nut-form :model-value="modelValue" :rules="rules" :style="style">
    <nut-form-item
      v-for="item in body"
      :key="item.name"
      :label="item.label"
      :required="item.required"
      :prop="item.prop"
      :rules="item.rules"
      :label-width="item.labelWidth"
      :label-align="item.labelAlign"
      :body-align="item.bodyAlign"
      :error-message-align="item.errorMessageAlign"
      :show-error-line="item.showErrorLine"
      :show-error-message="item.showErrorMessage"
    >
      <view v-if="item.component === 'calendarField'">
        <calendar
          v-model="fields[item.name]"
          :type="item.type"
          :poppable="item.poppable"
          :is-auto-back-fill="item.isAutoBackFill"
          :title="item.title"
          :start-date="item.startDate"
          :end-date="item.endDate"
          :show-today="item.showToday"
          :start-text="item.startText"
          :end-text="item.endText"
          :confirm-text="item.confirmText"
          :show-title="item.showTitle"
          :show-sub-title="item.showSubTitle"
          :to-date-animation="item.toDateAnimation"
          :first-day-of-week="item.firstDayOfWeek"
        />
      </view>
      <view v-if="item.component === 'cascaderField'">
        <cascader
          v-model="fields[item.name]"
          :options="item.options"
          :value-key="item.valueKey"
          :text-key="item.textKey"
          :children-key="item.childrenKey"
          :convert-config="item.convertConfig"
          :title="item.title"
          :close-icon-position="item.closeIconPosition"
          :closeable="item.closeable"
          :poppable="item.poppable"
        />
      </view>
      <view v-if="item.component === 'checkboxField'">
        <nut-checkbox-group v-model="fields[item.name]" :max="item.max" :disabled="item.disabled">
          <nut-checkbox
            v-for="subItem in item.options"
            :key="subItem.value"
            :disabled="subItem.disabled"
            :text-position="subItem.textPosition"
            :icon-size="subItem.iconSize"
            :label="subItem.value"
            :indeterminate="subItem.indeterminate"
            :shape="subItem.shape"
          >
            {{ subItem.label }}
          </nut-checkbox>
        </nut-checkbox-group>
      </view>
      <view v-if="item.component === 'radioField'">
        <nut-cell-group v-model="fields[item.name]" :text-position="item.textPosition" :direction="item.direction">
          <nut-radio
            v-for="subItem in item.options"
            :key="subItem.value"
            :disabled="subItem.disabled"
            :icon-size="subItem.iconSize"
            :label="subItem.value"
            :shape="subItem.shape"
          >
            {{ subItem.label }}
          </nut-radio>
        </nut-cell-group>
      </view>
      <view v-if="item.component === 'rangeField'">
        <nut-range
          v-model="fields[item.name]"
          :range="item.range"
          :max="item.max"
          :min="item.min"
          :step="item.step"
          :disabled="item.disabled"
          :vertical="item.vertical"
          :hidden-range="item.hiddenRange"
          :hidden-tag="item.hiddenTag"
          :active-color="item.activeColor"
          :inactive-color="item.inactiveColor"
          :button-color="item.buttonColor"
          :marks="item.marks"
        />
      </view>
      <view v-if="item.component === 'rateField'">
        <nut-rate
          v-model="fields[item.name]"
          :count="item.count"
          :active-color="item.activeColor"
          :void-color="item.voidColor"
          :allow-half="item.allowHalf"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :spacing="item.spacing"
          :size="item.size"
          :custom-icon="item.customIcon"
        />
      </view>
      <view v-if="item.component === 'searchbarField'">
        <nut-searchbar
          v-model="fields[item.name]"
          :label="item.label"
          :shape="item.shape"
          :max-length="item.maxLength"
          :input-type="item.inputType"
          :placeholder="item.placeholder"
          :clearable="item.clearable"
          :clear-icon="item.clearIcon"
          :background="item.background"
          :input-background="item.inputBackground"
          :confirm-type="item.confirmType"
          :autofocus="item.autofocus"
          :focus-style="item.focusStyle"
          :disabled="item.disabled"
          :readonly="item.readonly"
          :input-align="item.inputAlign"
        />
      </view>
      <view v-if="item.component === 'shortPasswordField'">
        <short-password
          v-model="fields[item.name]"
          :label="item.label"
          :shape="item.shape"
          :max-length="item.maxLength"
          :input-type="item.inputType"
          :placeholder="item.placeholder"
          :clearable="item.clearable"
          :clear-icon="item.clearIcon"
          :background="item.background"
          :input-background="item.inputBackground"
          :confirm-type="item.confirmType"
          :autofocus="item.autofocus"
          :focus-style="item.focusStyle"
          :disabled="item.disabled"
          :readonly="item.readonly"
          :input-align="item.inputAlign"
        />
      </view>
      <view v-if="item.component === 'textareaField'">
        <nut-textarea
          v-model="fields[item.name]"
          :placeholder="item.placeholder"
          :max-length="item.maxLength"
          :rows="item.rows"
          :limit-show="item.limitShow"
          :autosize="item.autosize"
          :text-align="item.textAlign"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :autofocus="item.autofocus"
        />
      </view>
      <view v-if="item.component === 'inputField'">
        <nut-input
          v-model="fields[item.name]"
          :type="item.type"
          :placeholder="item.placeholder"
          :input-align="item.inputAlign"
          :border="item.border"
          :disabled="item.disabled"
          :readonly="item.readonly"
          :autofocus="item.autofocus"
          :max-length="item.maxLength"
          :clearable="item.clearable"
          :show-clear-icon="item.showClearIcon"
          :clear-size="item.clearSize"
          :show-word-limit="item.showWordLimit"
          :error="item.error"
          :formatter="item.formatter"
          :format-trigger="item.formatTrigger"
          :confirm-type="item.confirmType"
          :adjust-position="item.adjustPosition"
          :always-system="item.alwaysSystem"
        />
      </view>
      <view v-if="item.component === 'inputNumberField'">
        <nut-input-number
          v-model="fields[item.name]"
          :input-width="item.inputWidth"
          :button-size="item.buttonSize"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          :decimal-places="item.decimalPlaces"
          :disabled="item.disabled"
          :readonly="item.readonly"
        />
      </view>
    </nut-form-item>
    <render :body="actions" :data="data" :callback="submit" />
  </nut-form>
</template>

<style lang="scss"></style>
