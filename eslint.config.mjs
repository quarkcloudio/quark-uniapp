import uni from '@uni-helper/eslint-config'

export default uni(
  {
    unocss: true,
    rules: {
      'no-console': 'off',
      'vue/no-export-in-script-setup': 'off',
    },
  },
)
