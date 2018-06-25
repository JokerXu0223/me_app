/**
 * @component overHeader.js
 * @description 业绩概览
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageBackground, Image, TouchableOpacity, View, Text } from 'react-native';
import { BorderShadow } from '../common';
import { theme } from '../../constants';

import PressRight from '../common/pressRight';

const HeaderBackImage = styled(ImageBackground)`
  height: 300px;
`;

const HeaderView = styled(View)`
  flex-direction: column;
  align-items: flex-end;
  padding-top: 12px;
  padding-left: 15px;
  padding-right: 15px;
`;

const PacketView = styled(TouchableOpacity)`
  width: 42px;
  height: 42px;
`;

const PacketBackView = PacketView.extend`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const PacketBackBg = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: .5;
  border-radius: 50;
  z-index: -1;
`;

const NumberView = styled(View)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1px 2px;
  border-radius: 50;
  background-color: #DF3C50;
`;

const NumberText = styled(Text)`
  font-size: 11px;
  color: #FDC600;
  font-family: ${theme.fontMedium};
`;

const PerfBackImage = styled(ImageBackground)`
  margin-top: 17px;
  height: 171px;
  width: 100%;
  background-color: #ffffff;
  padding-left: 22px;
  padding-right: 15px;
`;

const PerfHeader = styled(View)`
  height: 49px;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
`;

const PerfHeaderLeft = styled(Text)`
  font-family: ${theme.fontMedium};
  font-size: 18px;
  color: #5374C7;
`;

const PerfSection = styled(View)`
  margin-top: 10px;
  justify-content: center;
  align-items: stretch;
  /* align-items: baseline; 不兼容安卓 */
  flex-direction: row;
`;

const PerfSectionText = styled(Text)`
  font-family: ${theme.fontRegular};
  font-size: 24px;
  color: #ED597D;
  padding-top: 24px;
  margin-right: 30px;
`;

const PerfSectionMoney = styled(Text)`
  font-family: ${theme.fontMedium};
  font-size: 48px;
  color: #ED597D;
  margin-right: 0;
`;

const FooterView = styled(View)`
  flex: 1;
  background-color: #FF4170;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const LabelItem = styled(View)`
  align-items: center;
`;

const LabelTitle = styled(Text)`
  font-size: 18px;
  font-family: ${theme.fontMedium};
  color: #F8F8F8;
  height: 25px;
  align-items: center;
`;

const LabelType = styled(Text)`
  font-size: 14px;
  font-family: ${theme.fontRegular};
  color: #FFD9E2;
  align-items: center;
`;

class OverHeader extends React.PureComponent {
  switchPacket = () => {
    const {
      packNum,
      packBack,
      doPacket,
    } = this.props;
    if (packNum) {
      return (
        <PacketBackView onPress={doPacket}>
          <PacketBackBg />
          <Image source={packBack} />
          <NumberView>
            <NumberText>12</NumberText>
          </NumberView>
        </PacketBackView>
      );
    }
    return <PacketView />;
  }
  render() {
    const {
      headerBack,
      perfBack,
      goIcon,
      perfInfo,
      doPerf,
    } = this.props;
    const shadowOpt = {
      width: 750,
      color: '#580F21',
      opacity: 0.38,
      border: 11,
      side: 'top',
      style: { width: '100%' },
    }
    return (
      <HeaderBackImage
        source={headerBack}
      >
        <HeaderView>
          {this.switchPacket()}
          <PerfBackImage
            source={perfBack}
          >
            <PerfHeader>
              <PerfHeaderLeft>今日业绩</PerfHeaderLeft>
              <PressRight
                title="业绩汇总"
                goIcon={goIcon}
                onPress={doPerf}
              />
            </PerfHeader>
            <PerfSection>
              <PerfSectionText>¥</PerfSectionText>
              <PerfSectionMoney>
                {perfInfo.total && perfInfo.total.toFixed(2)}
              </PerfSectionMoney>
            </PerfSection>
          </PerfBackImage>
        </HeaderView>
        <BorderShadow setting={shadowOpt} />
        <FooterView>
          <LabelItem>
            <LabelTitle>{perfInfo.follow}</LabelTitle>
            <LabelType>新增粉丝</LabelType>
          </LabelItem>
          <LabelItem>
            <LabelTitle>{perfInfo.newMember}</LabelTitle>
            <LabelType>新增会员</LabelType>
          </LabelItem>
          <LabelItem>
            <LabelTitle>{perfInfo.newCard}</LabelTitle>
            <LabelType>核销卡券数</LabelType>
          </LabelItem>
        </FooterView>
      </HeaderBackImage>
    );
  }
}

OverHeader.defaultProps = {
  packNum: null,
  perfInfo: {},
};

OverHeader.propTypes = {
  headerBack: PropTypes.number.isRequired,
  packBack: PropTypes.number.isRequired,
  packNum: PropTypes.number,
  perfBack: PropTypes.number.isRequired,
  goIcon: PropTypes.number.isRequired,
  perfInfo: PropTypes.objectOf(PropTypes.any),
  doPacket: PropTypes.func.isRequired,
  doPerf: PropTypes.func.isRequired,
};

export default OverHeader;
