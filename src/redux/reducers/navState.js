/**
 * @component navState.js
 * @description dispatch or redux-saga to route
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppStack from '../../pages';

export default createNavigationReducer(AppStack);
