/**
 * @component navigationService.js
 * @description 路由工具
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;// eslint-disable-line

const registerTopNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const reset = (routeName, params) => {
  _navigator.props.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName,
        params,
      }),
    ],
  }));
};

const push = (routeName, params) => {
  _navigator.props.dispatch(StackActions.push({
    routeName,
    params,
  }));
};

const pop = (n) => {
  _navigator.props.dispatch(StackActions.pop({
    n,
  }));
};

const navigate = (routeName, params) => {
  _navigator.props.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
};

const goBack = (key) => {
  _navigator.props.dispatch(NavigationActions.back({
    key,
  }));
};

// add other navigation functions that you need and export them
export {
  reset,
  push,
  pop,
  navigate,
  goBack,
  registerTopNavigator,
};
