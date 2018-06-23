/**
 * @component overHeader.js
 * @description 业绩概览
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageBackground } from 'react-native';
import {theme} from "../../constants";

const HeaderBackImage = styled(ImageBackground)`
  height: 242px;
  background-color: ${props => props.color};
  flex-direction: column;
  align-items: flex-end;
  padding-top: 12px;
  padding-left: 15px;
  padding-right: 15px;
`;

const WalletBackImage = styled(ImageBackground)`
  width: 42px;
  height: 42px;
  background-color: #000000;
  opacity: .5;
  border-radius: 50;
`;

const OverViewCard = styled(ImageBackground)`
  margin-top: 17px;
  height: 171px;
  width: 100%;
  background-color: #ffffff;
  padding-left: 37px;
  padding-right: 15px;
`;

class overHeader extends React.PureComponent {
  render() {
    return (
      <HeaderBackImage color={theme.redColor}>
        <WalletBackImage />
        <OverViewCard />
      </HeaderBackImage>
    );
  }
}

overHeader.defaultProps = {};

overHeader.propTypes = {};

export default overHeader;
