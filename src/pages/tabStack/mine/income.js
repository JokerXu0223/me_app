/**
 * @component income.js
 * @description 卡券效果
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

class MineIncome extends Component {
  state = {};

  render() {
    return (
      <BasicPage>
        <Text>我的收益</Text>
      </BasicPage>
    );
  }
}

MineIncome.navigationOptions = () => ({
  title: '我的收益',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineIncome.propTypes = {
};

export default MineIncome;
