/**
 * @component index.js
 * @description 根reducers
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import { combineReducers } from 'redux';
import navState from './navState';
import * as home from './home';

export default combineReducers({
  navState,
  ...home,
});
