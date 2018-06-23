/**
 * @component home.js
 * @description home 服务
 * @time 2018/6/23
 * @author JUSTIN XU
 */
// TODO add api
// import axios from '../utils/request';

export function getDemo({ ms = 1000 } = {}) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
