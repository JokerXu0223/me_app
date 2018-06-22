/**
 * @component request.js
 * @description 封装 xhr请求
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../config/api';

const ERROR = {
  SERVE_ERROR: '服务器发生未知错误',
  SERVE_TOKEN_ERROR: '令牌失效',
  TIMEOUT_ERROR: '网络连接超时',
}

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 6000,
});

// Add a request interceptor
instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  // removeToken is true, don't need token
  if (token && !config.removeToken) {
    config.headers['X-Pool-Jwt'] = token;
  }
  return config;
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
  const { data, status } = response;
  if ((status >= 200 && status < 300) || Object.is(304, status)) {
    if (Object.is('arraybuffer', response.config.responseType)) {
      const filename = response.headers['content-disposition'] || '';
      return { filename, file: data };
    }
    return data;
  }
  const res = new Error(data.code);
  res.response = response;
  throw res;
}, async (err) => {
  const { status, data: { msg, message } = {}, config = {} } = err.response || {};
  const errMsg = msg || message;
  if (Object.is(401, status) && !config.removeAuth) {
    await AsyncStorage.removeItem('token');
    const result = errMsg || ERROR.SERVE_TOKEN_ERROR;
    // TODO add handle message
    throw new Error(result);
  }
  // handle network timeout
  if (Object.is('ECONNABORTED', err.code)) {
    throw new Error(ERROR.TIMEOUT_ERROR);
  }
  throw new Error(errMsg || ERROR.SERVE_ERROR);
});

export default instance;

export function removeHandleAuth() {
  return { removeAuth: true };
}

export function removeHandleToken() {
  return { removeToken: true };
}

export function getBufferResType(download) {
  return download ? 'arraybuffer' : 'json';
}
