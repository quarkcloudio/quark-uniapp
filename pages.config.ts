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
  easycom: {
    custom: {
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home_active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'static/images/my.png',
        selectedIconPath: 'static/images/my_active.png',
      },
    ],
    color: '#7d7e80',
    selectedColor: '#fa2c19',
    backgroundColor: '#fff',
    borderStyle: '#eee',
  },
})
