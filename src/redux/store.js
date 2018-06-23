/**
 * @component store.js
 * @description 根store
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'remote-redux-devtools';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers';

const naviMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navState,
);
const middlewares = [thunkMiddleware, naviMiddleware]; // 中间插件
/* global __DEV__  */
if (__DEV__) {
  middlewares.push(loggerMiddleware);
}
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

export default function configureStore(initialState) {
  // Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
