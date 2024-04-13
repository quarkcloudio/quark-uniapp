import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHelloStore = defineStore('selected', () => {
  const helloText = ref("welcome to use quark uniapp")
  function setHelloText(text: string) {
    helloText.value = text
  }

  return { helloText, setHelloText }
})