/**
 * @component tabsPanel.js
 * @description Tabs panel 容器样式
 * @time 2018/6/25
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, View, TouchableOpacity } from 'react-native';

import { theme } from '../../constants';

export const TabsPanelView = styled(View)`
  background: #FFFFFF;
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const HeaderContainer = styled(TouchableOpacity)`
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeaderText = styled(Text)`
  margin-top: 3px;
  font-family:${theme.fontMedium};
  font-size: 18px;
  color: #4F4F4F;
`;
/**
 * color: ${props => (props.active ? theme.primaryColor : 'rgb(102, 102, 102)')};
 * */

const ActiveBoard = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 4px;
  width: 100%;
  background-color: ${theme.primaryColor};
`;

class PanelHeader extends React.PureComponent {
  render() {
    const {
      title,
      active,
      onPress,
    } = this.props;
    return (
      <HeaderContainer onPress={onPress}>
        <HeaderText active={active}>{title}</HeaderText>
        {active && <ActiveBoard />}
      </HeaderContainer>
    );
  }
}

PanelHeader.defaultProps = {
  onPress: () => null,
};

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

export default PanelHeader;
