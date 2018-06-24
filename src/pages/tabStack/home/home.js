/**
 * @component home.js
 * @description 首页
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, ScrollView, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { fetchIncrementAsync } from '../../../redux/actions/home';
import { theme } from '../../../constants';
import { CommStatusBar } from '../../../components/layout';
import { OverHeader, PressRight, BirthItem } from '../../../components/home';
import { Carousel } from '../../../components/common';

// static source
import goIcon from '../../../assets/home/go.png';
import HeadImage from '../../../assets/test/head.png';

const ContainerView = styled(ScrollView)`
  flex: 1;
`;

const MembBirthView = styled(View)`
  margin-top: 24px;
  margin-bottom: 18px;
  height: 25px;
  padding: 0 14px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const BodyView = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BodyTitle = styled(Text)`
  margin-left: 5px;
  font-family: ${theme.fontMedium};
  font-size: 18px;
  color: #515151;
`;

class HomeScreen extends React.Component {
  render() {
    const overHeadProps = {
      headerBack: require('../../../assets/home/homeBack.png'),
      packBack: require('../../../assets/home/packBack.png'),
      packNum: 12,
      perfBack: require('../../../assets/home/perfBack.png'),
      goIcon,
      perfInfo: {
        total: 8000.00,
        follow: 12,
        newMember: 20,
        newCard: 20,
      },
      doPacket: () => alert('pack'),
      doPerf: () => alert('pref'),
    }
    const caroProps = {
      entries: [{
        thumbnail: HeadImage,
        name: '张三',
        docSummary: '明天生日',
      },
      {
        thumbnail: HeadImage,
        name: '李雷',
        docSummary: '今天生日',
      },
      {
        thumbnail: HeadImage,
        name: '韩梅梅',
        docSummary: '后天生日',
      },
      {
        thumbnail: HeadImage,
        name: '老王',
        docSummary: '距离生日3天',
      }],
    }
    return (
      <ContainerView>
        <CommStatusBar />
        <OverHeader {...overHeadProps} />
        <MembBirthView>
          <View width={49} />
          <BodyView>
            <Image
              source={require('../../../assets/home/birthday.png')}
            />
            <BodyTitle>会员生日</BodyTitle>
          </BodyView>
          <PressRight
            title="更多"
            titleStyle={{ fontSize: 14 }}
            goIcon={goIcon}
            onPress={() => alert('more')}
          />
        </MembBirthView>
        <Carousel {...caroProps}>
          <BirthItem />
        </Carousel>
      </ContainerView>
    );
  }
}

HomeScreen.navigationOptions = {
  headerTitle: '首页',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    setParams: PropTypes.func,
    state: PropTypes.shape({
      key: PropTypes.string,
      routeName: PropTypes.string,
      params: PropTypes.object,
    }),
  }).isRequired,
  fetchIncrementAsync: PropTypes.func.isRequired,
  homeDemo: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  homeDemo: state.homeDemo,
});

const mapDispatchToProps = ({
  fetchIncrementAsync,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

