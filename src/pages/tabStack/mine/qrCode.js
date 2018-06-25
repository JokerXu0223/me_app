/**
 * @component qrCode.js
 * @description 卡券效果
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

class MineQrCode extends Component {
  state = {};

  render() {
    return (
      <BasicPage>
        <Text>我的二维码</Text>
      </BasicPage>
    );
  }
}

MineQrCode.navigationOptions = () => ({
  title: '我的二维码',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineQrCode.propTypes = {
};

export default MineQrCode;
