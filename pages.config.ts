import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [
    { path: 'pages/engine/custom', name: 'custom', navigationStyle: 'custom' },
    { path: 'pages/engine/default', name: 'default', navigationStyle: 'default' },
  ],
  globalStyle: {
    'navigationBarTitleText': 'Engine Loading',
    'navigationBarBackgroundColor': '@navBgColor',
    'navigationBarTextStyle': '@navTxtStyle',
    'backgroundColor': '@bgColor',
    'backgroundTextStyle': '@bgTxtStyle',
    'backgroundColorTop': '@bgColorTop',
    'backgroundColorBottom': '@bgColorBottom',
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
})
