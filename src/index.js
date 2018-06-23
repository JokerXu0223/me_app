/**
 * @component index.js
 * @description 根路由
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { Root } from 'native-base'; // in order to use Toast etc..
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import configureStore from './redux/store';
import { registerTopNavigator } from './utils/navigationService';
import AppStack from './pages';

export const store = configureStore();

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const AppNavigator = reduxifyNavigator(AppStack, 'root');

const App = ({ dispatch, state }) => (
  <Root>
    <AppNavigator
      dispatch={dispatch}
      state={state}
      ref={navigatorRef => registerTopNavigator(navigatorRef)}
    />
  </Root>
);

App.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state.navState,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
