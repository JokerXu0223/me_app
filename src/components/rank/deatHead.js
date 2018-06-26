/**
 * @component detaHead.js
 * @description 详情头部
 * @time 2018/6/25
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, View } from 'react-native';

import { theme } from '../../constants';
import { ImageView } from '../styles/headImage';

const HeadContainer = styled(View)`
  height: 106px;
  padding-left: 51px;
  padding-right: 51px;
  justify-content: space-between;
  flex-direction: row;
  border: 1px #F6F6F6;
`;

const CommonView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BothSideText = styled(Text)`
  font-family: ${theme.fontMedium};
  font-size: 20px;
  color: #5374C7;
  letter-spacing: -0.36px;
`;

const BothSideFooter = styled(Text)`
  margin-top: 1px;
  font-family: ${theme.fontRegular};
  font-size: 14px;
  color: #6E6E6E;
  letter-spacing: -0.43px;
`;

const BodyFooter = styled(Text)`
  font-family:${theme.fontMedium};
  font-size: 16px;
  color: #515151;
  letter-spacing: -0.5px;
`;

class DetaHeadScreen extends React.PureComponent {
  render() {
    const {
      userInfo,
    } = this.props;
    return (
      <HeadContainer>
        <CommonView>
          <BothSideText>{userInfo.leftNum}</BothSideText>
          <BothSideFooter>{userInfo.leftText}</BothSideFooter>
        </CommonView>
        <CommonView>
          <ImageView
            source={userInfo.thumbnail}
          />
          <BodyFooter>李四</BodyFooter>
        </CommonView>
        <CommonView>
          <BothSideText>{userInfo.rightNum}</BothSideText>
          <BothSideFooter>{userInfo.rightText}</BothSideFooter>
        </CommonView>
      </HeadContainer>
    );
  }
}

DetaHeadScreen.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetaHeadScreen;
