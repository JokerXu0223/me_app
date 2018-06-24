/**
 * @component home.js
 * @description 首页
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchIncrementAsync } from '../../../redux/actions/home';
import { theme } from '../../../constants';
import { BasicPage } from '../../../components/layout';
import { OverHeader, BirthItem } from '../../../components/home';
import { Carousel, PreviewHead, PressRight } from '../../../components/common';

// static source
import goIcon from '../../../assets/home/go.png';
import HeadImage from '../../../assets/test/head.png';

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
    const prevProps = {
      bodyIcon: require('../../../assets/home/birthday.png'),
      bodyTitle: '会员生日',
      rightElem: (
        <PressRight
          title="更多"
          titleStyle={{ fontSize: 14 }}
          onPress={() => alert('more')}
        />
      ),
    }
    return (
      <BasicPage>
        <OverHeader {...overHeadProps} />
        <PreviewHead {...prevProps} />
        <Carousel {...caroProps}>
          <BirthItem />
        </Carousel>
      </BasicPage>
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

