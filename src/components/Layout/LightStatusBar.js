/**
 * @component LightStatusBar.js
 * @description 头部
 * @time 2018/6/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

const LightStatusBar = ({ barStyle, backgroundColor, translucent }) => (
  <StatusBar
    barStyle={barStyle}
    backgroundColor={backgroundColor}
    translucent={translucent}
  />
);

LightStatusBar.defaultProps = {
  barStyle: 'light-content',
  backgroundColor: 'transparent',
  translucent: true,
};

LightStatusBar.propTypes = {
  barStyle: PropTypes.string,
  backgroundColor: PropTypes.string,
  translucent: PropTypes.bool,
};

export default LightStatusBar;
