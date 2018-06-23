/**
 * @component home.js
 * @description 首页 reducers
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import * as Types from '../actionTypes/home';

const initDemo = {
  loading: false,
  errMsg: null,
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
}

export function homeDemo(state = initDemo, action) {
  switch (action.type) {
    case Types.FETCH_INCREMENT_REQUEST: {
      return { ...state, loading: true, errMsg: null };
    }
    case Types.FETCH_INCREMENT_RESPONSE: {
      return { ...state, loading: false, ...action.payload };
    }
    default:
      return state;
  }
}

