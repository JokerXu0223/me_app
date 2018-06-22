/**
 * @component index.js
 * @description TabBar 根路由
 * @time 2018/6/17
 * @author JUSTIN XU
 */
import { createBottomTabNavigator } from 'react-navigation';

import { routers, theme } from '../../config';
import HomeScreen from './Home';
import MemberScreen from './Member';
import RankScreen from './Rank';
import MineScreen from './Mine';

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
