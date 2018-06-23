/**
 * @component index.js
 * @description 首页
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import { routers, theme } from '../../../constants';
import HomeScreen from './Home';
import DetailsScreen from './Details';

const RouteConfig = {
  [routers.home]: HomeScreen,
  [routers.details]: DetailsScreen,
};

const navigatorConfig = {
  initialRouteName: routers.home,
  cardStyle: { shadowColor: 'transparent' },
  // mode: 'modal',
  headerMode: 'screen',
};

const HomeStack = createStackNavigator(RouteConfig, navigatorConfig);

const tabBarIcon = ({ focused }) => (
  <Icon
    name="home"
    size={24}
    style={{
      color: focused ? theme.primaryColor : theme.inactiveColor,
    }}
  />
);

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

HomeStack.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '首页',
    tabBarIcon,
    tabBarOptions: {
      activeTintColor: theme.primaryColor, // 文字和图片选中颜色
      inactiveTintColor: theme.inactiveColor, // 文字和图片默认颜色
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  };
};

export default HomeStack
