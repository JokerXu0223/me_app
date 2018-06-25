/**
 * @component index.js
 * @description 根路由
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { createStackNavigator } from 'react-navigation';

import { routers } from '../constants';
import TabView from './tabStack';

const RouteConfigs = {
  [routers.tabView]: TabView,
};

const NavigatorConfig = {
  initialRouteName: routers.tabView,
  mode: 'modal',
  cardStyle: { shadowColor: 'transparent' },
  headerTransitionPreset: 'fade-in-place',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);

