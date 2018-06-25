/**
 * @component index.js
 * @description 排行
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import styled from 'styled-components';
import { View, Text, ScrollView } from 'react-native';
import { theme } from '../../../constants';

import { BasicPage } from '../../../components/layout';
import { PanelView, RankItem } from '../../../components/rank';
import {
  BorderShadow,
  PreviewHead,
  PressRight,
  Carousel,
} from '../../../components/common';

// static source
import HeadImage from '../../../assets/test/head.png';

const TabsPanelView = styled(View)`
  background: #FFFFFF;
  height: 69px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DividerView = styled(View)`
  width: 1px;
  height: 46px;
  background-color: #F6F6F6;
  flex: none;
`;

const RankNumView = styled(View)`
  margin-bottom: 9px;
  justify-content: center;
  align-items: center;
`;

const RankNumText = styled(Text)`
  font-family: ${theme.fontRegular};
  font-size: 13px;
  color: #B0B0B0;
  letter-spacing: -0.43px;
`;

class RankScreen extends React.Component {
  state = {
    activeIndex: 2,
  }
  changeHandle = (index) => {
    const { activeIndex } = this.state;
    if (activeIndex === index) return false;
    this.setState({ activeIndex: index });
  }
  render() {
    const { activeIndex } = this.state;
    const shadowOpt = {
      width: 750,
      color: '#CBD5F1',
      border: 4,
      opacity: 0.3,
      side: 'bottom',
      style: { width: '100%', marginTop: 4 },
    }
    const prevCommProps = {
      leftWidth: 70,
      containerStyle: {
        marginTop: 16,
        marginBottom: 11,
      },
    }
    const follProps = {
      entries: [{
        thumbnail: HeadImage,
        name: '张三',
        ranking: 2,
      },
      {
        thumbnail: HeadImage,
        name: '李雷',
        ranking: 1,
      },
      {
        thumbnail: HeadImage,
        name: '韩梅梅',
        ranking: 3,
      }],
      containerStyle: {
        paddingTop: 18,
        paddingBottom: 22,
      },
    }
    return (
      <BasicPage>
        <ScrollView>
          <TabsPanelView>
            <PanelView
              icon={require('../../../assets/rank/store.png')}
              activeIcon={require('../../../assets/rank/store-focus.png')}
              title="门店"
              onPress={() => this.changeHandle(1)}
              active={activeIndex === 1}
            />
            <DividerView />
            <PanelView
              icon={require('../../../assets/rank/nationwide.png')}
              activeIcon={require('../../../assets/rank/nationwide-focus.png')}
              title="全国"
              active={activeIndex === 2}
              onPress={() => this.changeHandle(2)}
            />
          </TabsPanelView>
          <BorderShadow setting={shadowOpt} />
          <PreviewHead
            bodyIcon={require('../../../assets/rank/follow.png')}
            bodyTitle="粉丝榜"
            rightElem={(
              <PressRight
                title="查看详情"
                titleStyle={{
                  fontSize: 14,
                  color: theme.primaryColor,
                }}
                onPress={() => alert('follow')}
              />
            )}
            {...prevCommProps}
          />
          <RankNumView>
            <RankNumText>我的排名：78</RankNumText>
          </RankNumView>
          <Carousel {...follProps}>
            <RankItem />
          </Carousel>
          <PreviewHead
            bodyIcon={require('../../../assets/tabBar/member-focus.png')}
            bodyTitle="会员榜"
            rightElem={(
              <PressRight
                title="查看详情"
                titleStyle={{
                  fontSize: 14,
                  color: theme.primaryColor,
                }}
                onPress={() => alert('member')}
              />
            )}
            {...prevCommProps}
          />
          <RankNumView>
            <RankNumText>会员榜：278</RankNumText>
          </RankNumView>
          <Carousel {...follProps}>
            <RankItem />
          </Carousel>
          <PreviewHead
            bodyIcon={require('../../../assets/rank/sale.png')}
            bodyTitle="销售榜"
            rightElem={(
              <PressRight
                title="查看详情"
                titleStyle={{
                  fontSize: 14,
                  color: theme.primaryColor,
                }}
                onPress={() => alert('market')}
              />
            )}
            {...prevCommProps}
          />
          <RankNumView>
            <RankNumText>销售榜：178</RankNumText>
          </RankNumView>
          <Carousel {...follProps}>
            <RankItem />
          </Carousel>
        </ScrollView>
      </BasicPage>
    );
  }
}

RankScreen.navigationOptions = () => ({
  title: '排行',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});


RankScreen.propTypes = {
};

export default RankScreen;
