/**
 * @component performance.js
 * @description 我的业绩
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { PanelHeader } from '../../../components/common'

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

const TabList = ["粉丝数", "会员数", "销售额"]

class PerformanceView extends Component {
  state = {
    tabIndex: 0
  };

  onTabHandler(tabIndex) {
    this.setState({tabIndex})
  }

  render() {
    let { tabIndex } = this.state

    return (
      <BasicPage>
        <PanelHeader data={TabList} activeIndex={tabIndex} onChange={tab=>this.onTabHandler(tab)} />
        <Text>我的业绩。。。。</Text>
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
