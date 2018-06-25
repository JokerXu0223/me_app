/**
 * @component performance.js
 * @description 我的业绩
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity} from 'react-native';
import { PanelHeader } from '../../../components/common'

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';
import styled from 'styled-components';

const PicView = styled(ImageBackground)`
  width: 345;
  height: 138px;
  margin: 0 auto;
  margin-top: 10px;
  borderRadius: 172;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ItemView = styled(View)`
  width: 90px;
`
const PicValueText = styled(Text)`
  font-size: 20px;
  color: #FFFFFF;
  width: 100%;
  text-align: center;
`

const PicTitleText = styled(Text)`
  font-size: 16px;
  color: #D4E2FF;
  width: 100%;
  text-align: center;
  margin-top: 10px;
`

const ChartTitleView = styled(View)`
  margin-top: 44px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ChartTitleImage = styled(Image)`
  width: 18px;
  height: 18px;
`

const ChartTitleText = styled(Text)`
  font-size: 18px;
  color: #515151;
  margin-left: 7px;
`
const ButtonGroupView = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  margin-top: 7px;
`

const ButtonView = styled(View)`
  width: 44px;
  height: 22px;
  borderRadius: 4;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${state => (state.activeChartType == 0 ? "#5374C7" : '#6F6F6F')};
`

const DescriptionText = styled(Text)`
  margin-top: 15px;
  font-size: 12px;
  color: #C0C0C0;
  margin-left: 15px;
`

const TabList = ["粉丝数", "会员数", "销售额"]
const FansBg = require('../../../assets/mine/fans.png');
const MemberBg = require('../../../assets/mine/member.png');
const SaleBg = require('../../../assets/mine/sale.png');
const PicTabList = [FansBg, MemberBg, SaleBg]

class PerformanceView extends Component {
  state = {
    tabIndex: 0,
    activeChartType: 0
  };

  onTabHandler(tabIndex) {
    this.setState({tabIndex})
  }

  onChartTypeHandler(activeChartType) {
    this.setState({activeChartType})
  }

  render() {
    let { tabIndex } = this.state;

    return (
      <BasicPage>
        <PanelHeader data={TabList} activeIndex={tabIndex} onChange={tab=>this.onTabHandler(tab)} />
        <View>
          <PicView source={PicTabList[tabIndex]}>
            <ItemView>
              <PicValueText>12</PicValueText>
              <PicTitleText>昨天</PicTitleText>
            </ItemView>

            <ItemView>
              <PicValueText>76</PicValueText>
              <PicTitleText>上周</PicTitleText>
            </ItemView>

            <ItemView>
              <PicValueText>360</PicValueText>
              <PicTitleText>上月</PicTitleText>
            </ItemView>
          </PicView>

          <ChartTitleView>
            <ChartTitleImage source={require('../../../assets/mine/statistics.png')} />
            <ChartTitleText>数据统计</ChartTitleText>
          </ChartTitleView>

          <ButtonGroupView>
            <TouchableOpacity onPress={()=>this.onChartTypeHandler(0)}><ButtonView><ButtonText>上周</ButtonText></ButtonView></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onChartTypeHandler(1)}><ButtonView><ButtonText>上月</ButtonText></ButtonView></TouchableOpacity>
          </ButtonGroupView>

          <DescriptionText>发展会员人数</DescriptionText>
        </View>
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
