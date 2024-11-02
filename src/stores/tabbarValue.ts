import { defineStore } from 'pinia'

export const useTabbarValueStore = defineStore('tabbarValue', () => {
  const value = ref(0)

  function setValue(indexValue: number) {
    value.value = indexValue
  }

  return {
    value,
    setValue,
  }
})
