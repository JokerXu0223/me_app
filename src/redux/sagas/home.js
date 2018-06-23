/**
 * @component home.js
 * @description home saga
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import * as homeApi from '../../api/home';
import * as Types from '../actions/home';


// saga
const fetchIncrement = function* saga({ payload = 1 }) {
  try {
    yield call(homeApi.getDemo, { ms: 2000 });
    const bool = Math.random() > 0.5;
    if (bool) throw new Error('test error');
    const demo = yield select(state => state.homeDemo);
    const data = demo.get('list');
    const list = data.map((value) => {
      if (value.get('id') === payload) {
        return value.updateIn(['number'], number => number + 1);
      }
      return value;
    })
    yield put({
      type: Types.FETCH_INCREMENT_RESPONSE,
      payload: { list },
    });
  } catch (e) {
    yield put({
      type: Types.FETCH_INCREMENT_RESPONSE,
      payload: { errMsg: e.message },
    });
  }
}

export default function* rootFlow() {
  yield all([
    takeEvery(Types.FETCH_INCREMENT_REQUEST, fetchIncrement),
  ]);
}

