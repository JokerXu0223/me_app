/**
 * @component index.js
 * @description 我的
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { MineHeader, MineNavItem } from '../../../components/mine';
import { BasicPage } from '../../../components/layout';
import { theme, routers } from '../../../constants';

const ListView = styled(View)`
  width: 100%;
  background: #ffffff;
`;

const PageView = styled(View)`
  flex: 1;
  background: #F9F9F9;
`

const NavList = [
  {
    icon: require('../../../assets/mine/statistics.png'),
    title: '我的业绩',
    path: routers.minePerformance,
  },
  {
    icon: require('../../../assets/mine/pig.png'),
    title: '我的收益',
    path: routers.mineIncome,
  },
  {
    icon: require('../../../assets/mine/card.png'),
    title: '卡券效果',
    path: routers.mineCard,
  },
  {
    icon: require('../../../assets/mine/qrCode.png'),
    title: '我的二维码',
    path: routers.mineQrCode,
  },
  {
    icon: require('../../../assets/mine/report.png'),
    title: '我的月报',
    path: routers.mineReport,
  }
]

class MineScreen extends React.Component {
  state = {};

  onNavHandler(path) {
    this.props.navigation.navigate(path)
  }

  render() {
    return (
      <BasicPage>
        <PageView>
          <MineHeader />
          <ListView>
            {
              NavList.map((obj, index) => <MineNavItem data={obj} key={index} isLast={index===NavList.length-1} onPress={()=>this.onNavHandler(obj.path)} />)
            }
          </ListView>
        </PageView>
      </BasicPage>
    );
  }
}

MineScreen.navigationOptions = () => ({
  title: '个人中心',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineScreen.propTypes = {};

export default MineScreen;
