/**
 * @component index.js
 * @description 根saga
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { fork, all } from 'redux-saga/effects';
import home from './home';

export default function* rootSaga() {
  yield all([
    fork(home),
  ]);
}
