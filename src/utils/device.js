/**
 * @component device.js
 * @description 设备工具
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import { Platform, Dimensions, StatusBar } from 'react-native';
/**
 * device info
 */
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

/**
 * check if device is iphone X
 */
const isIphoneX = () => platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

/**
 * get header Tool Bar height
 */
const getToolBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX()) {
      return 88;
    }
    return 64;
  }
  return 56;
};

/**
 * get footer (action bar , tab bar .etc) height
 */
const getFooterHeight = () => {
  if (isIphoneX()) {
    return 89;
  }
  return 55;
};

/**
 * get StatusBar Height
 */
const getStatusBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX()) {
      return 44;
    }
    return 20;
  }
  return StatusBar.currentHeight;
};

export {
  isIphoneX,
  deviceWidth,
  deviceHeight,
  getToolBarHeight,
  getFooterHeight,
  getStatusBarHeight,
};
