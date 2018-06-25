/**
 * @component report.js
 * @description 月报
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

class MineReport extends Component {
  state = {};

  render() {
    return (
      <BasicPage>
        <Text>我的月报</Text>
      </BasicPage>
    );
  }
}

MineReport.navigationOptions = () => ({
  title: '月报',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineReport.propTypes = {
};

export default MineReport;
