/**
 * @component initialState.js
 * @description 初始化数据
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import immutable from 'immutable';

export const initBasicList = immutable.fromJS({
  loading: false,
  list: [],
  errMsg: null,
});

export const initBasicMap = immutable.fromJS({
  loading: false,
  map: {},
  errMsg: null,
});

export const initTableBasicList = initBasicList.merge({
  page_size: 10,
  page_index: null,
  total: null,
});
