/**
 * @component home.js
 * @description 首页Action
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import * as homeApi from '../../api/home';
import * as Types from '../actionTypes/home';

// fetch async
export const fetchIncrementAsync = ({ payload = 1 } = {}) => (async (dispatch, getState) => {
  try {
    await homeApi.getDemo({ ms: 2000 });
    const bool = Math.random() > 0.5;
    if (bool) throw new Error('test error');
    const { homeDemo: { list } } = getState();
    const res = list.map((value) => {
      if (value.id === payload) {
        value.number += 1;
      }
      return value;
    })
    dispatch({
      type: Types.FETCH_INCREMENT_RESPONSE,
      payload: { list: res },
    });
  } catch (e) {
    dispatch({
      type: Types.FETCH_INCREMENT_RESPONSE,
      payload: { errMsg: e.message },
    });
  }
});

