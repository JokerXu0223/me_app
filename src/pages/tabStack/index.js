/**
 * @component index.js
 * @description TabBar 根路由
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { createBottomTabNavigator } from 'react-navigation';

import { routers, theme } from '../../constants';
import HomeScreen from './home';
import MemberScreen from './member';
import RankScreen from './rank';
import MineScreen from './mine';

const RouteConfig = {
  [routers.home]: HomeScreen,
  [routers.member]: MemberScreen,
  [routers.rank]: RankScreen,
  [routers.mine]: MineScreen,
};

const navigatorConfig = {
  initialRouteName: routers.home,
  tabBarOptions: {
    style: {
      backgroundColor: theme.headerBackgroundColor,
      borderTopWidth: 0.5,
      borderTopColor: theme.headerBorderColor,
    },
    labelStyle: {
      fontSize: 10,
      color: theme.tabLabelColor,
    },
  },
};

const TabStack = createBottomTabNavigator(RouteConfig, navigatorConfig);

TabStack.navigationOptions = {
  header: null,
};

export default TabStack;
