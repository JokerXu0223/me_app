## react-native

###版本环境
```html
node 6.0+(v8.11.1)
npm 3.0+(v5.6.0)
```
### 安装依赖
* Run 'yarn setup'

### 开发环境 ios/ android
* Run 'yarn ios' 
OR
* Run 'yarn android'

### 项目结构
```html

|--src     源文件
  |--assets         静态资源
  |--components     组件
  |--constants      常量
  |--pages          页面
    |--TabStack     TabBar页面
  |--services       服务
  |--store          根store文件夹
  |--styles         此文件夹和node_modules不被CSS Module编译
  |--utils          工具文件夹
  |--index.js       全局入口js

|--package.json
|--README.md
```

## 技术栈和问题总结
```html
## styled-components (css in js )
## react-navigation (路由)
## native-base (UI库)
## eslint-config-airbnb (eslint)
```

## 问题总结
```html
## 官网需要翻墙
## 事件处理 (https://reactnative.cn/docs/0.39/handling-touches.html) 
## navigationOptions属性(https://www.aliyun.com/jiaocheng/351195.html)
{
  headerBackTitle 重置返回的Text 是在导航上级容器
}
## 兼容iponeX头部的方案
1. 外层使用 import { Container } from 'native-base';
2. 外层使用 import { SafeAreaView } from 'react-native';
3. 使用 utils/device.js getStatusBarHeight() 获取StatusBar的高度
### 重置了StatusBar
1. 保证ios，android每个页面都需要引入 components/Layout/CommStatusBar.js
2. StatusBar(https://reactnative.cn/docs/0.39/statusbar.html#content)
```

