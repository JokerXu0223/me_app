/**
 * @component index.js
 * @description 首页
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { routers, theme } from '../../../constants';
import HomeScreen from './home';
import DetailsScreen from './details';

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
  focused ? (
    <Image
      source={require('../../../assets/tabBar/home-focus.png')}
      size={24}
    />
  ) : (
    <Image
      source={require('../../../assets/tabBar/home.png')}
      size={24}
    />
  )
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
