/**
 * @component performance.js
 * @description 我的业绩
 * @time 2018/6/25
 * @author zhao
 */
import React from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme, View } from '../../../constants';

class PerformanceView extends React.Component {
  render() {
    return (
      <BasicPage>
        <Text>我的业绩</Text>
      </BasicPage>
    );
  }
}

PerformanceView.navigationOptions = () => ({
  title: '我的业绩',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

PerformanceView.propTypes = {
};

export default PerformanceView;
