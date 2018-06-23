/**
 * @component index.js
 * @description 根路由
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

import { routers } from '../constants';
import TabView from './tabStack';

export default createStackNavigator({
  [routers.tabView]: TabView,
}, {
  initialRouteName: routers.tabView,
});
