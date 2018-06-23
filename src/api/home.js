/**
 * @component home.js
 * @description home 服务
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import { delay } from 'redux-saga';
// TODO add api
// import axios from '../utils/request';

export function getDemo({ ms = 1000 } = {}) {
  return delay(ms);
}
