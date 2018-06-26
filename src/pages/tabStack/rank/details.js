/**
 * @component details
 * @description 排行详情
 * @time 2018/6/25
 * @author JUSTIN XU
 */
import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';

import { PanelHeader } from '../../../components/common';
import { BasicPage } from '../../../components/layout';
import { DeatHead } from '../../../components/rank';
import { theme } from '../../../constants';

import HeadImage from '../../../assets/test/head.png';

const DividerView = styled.View`
  height: 10px;
  background: #F6F6F6;
`;

const TabList = ['总榜', '上周', '上月'];

class DetailsScreen extends React.Component {
  state = {
    tabIndex: 0,
  };
  onTabHandle = (index) => {
    const { tabIndex } = this.state;
    if (tabIndex === index) return false;
    this.setState({ tabIndex: index });
    return null;
  }
  render() {
    const {
      state: {
        tabIndex,
      },
    } = this;
    const headProps = {
      userInfo: {
        thumbnail: HeadImage,
        leftNum: 15,
        leftText: '当前名次',
        rightNum: 33,
        rightText: '发展粉丝',
      },
    };
    return (
      <BasicPage>
        <PanelHeader
          data={TabList}
          activeIndex={tabIndex}
          isShadow={false}
          onChange={tab => this.onTabHandle(tab)}
        />
        <DividerView />
        <ScrollView>
          <DeatHead {...headProps} />
        </ScrollView>
      </BasicPage>
    );
  }
}

DetailsScreen.navigationOptions = () => ({
  title: '粉丝排行',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

DetailsScreen.propTypes = {
};

export default DetailsScreen;
