/**
 * @component api.js
 * @description api 文件
 * @time 2018/6/22
 * @author JUSTIN XU
 */

import { Platform } from 'react-native';

// TODO update url
export const REACT_APP_BASE_URL = Platform.OS === 'ios' ? 'http://172.16.3.202' : 'http://172.16.3.201';
