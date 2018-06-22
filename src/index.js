/**
 * @component index.js
 * @description 根路由
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

import { routers } from './constants/index';
import TabView from './pages/TabStack';

export default createStackNavigator({
  [routers.tabView]: TabView,
}, {
  initialRouteName: routers.tabView,
});
