/**
 * @component home.js
 * @description 首页 reducers
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import * as Types from '../actionTypes/home';
import { initBasicList } from './initialState';

const initDemo = initBasicList.merge({
  list: [{
    id: 1,
    title: 'First',
    number: 0,
  }, {
    id: 2,
    title: 'Second',
    number: 10,
  }, {
    id: 3,
    title: 'Third',
    number: 20,
  }],
})

export function homeDemo(state = initDemo, action) {
  switch (action.type) {
    case Types.FETCH_INCREMENT_REQUEST:
      return state.set('loading', true).set('errMsg', null);
    case Types.FETCH_INCREMENT_RESPONSE:
      return state.set('loading', false).merge(action.payload);
    default:
      return state;
  }
};
