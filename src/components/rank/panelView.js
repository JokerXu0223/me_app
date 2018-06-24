/**
 * @component PanelView
 * @description
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../constants';

const PanelContainer = styled(TouchableOpacity)`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PanelText = styled(Text)`
  font-family: ${theme.fontRegular};
  margin-top: 3px;
  color: ${props => (props.active ? '#5374C7' : '#AAAAAA;')};
  font-size: 13px;
  letter-spacing: -0.43px;
`;

const ActiveBoard = styled(View)`
  position: absolute;
  bottom: 0;
  left: 44%;
  height: 4px;
  width: 26px;
  background-color: #5374C7;
`;

class PanelView extends React.PureComponent {
  render() {
    const {
      icon,
      activeIcon,
      title,
      active,
      onPress,
    } = this.props;
    return (
      <PanelContainer onPress={onPress}>
        {
          active
          ?
            <Image source={activeIcon} />
            :
            <Image source={icon} />
        }
        <PanelText active={active}>{title}</PanelText>
        {active && <ActiveBoard />}
      </PanelContainer>
    );
  }
}

PanelView.defaultProps = {
  onPress: () => null,
};

PanelView.propTypes = {
  icon: PropTypes.number.isRequired,
  activeIcon: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

export default PanelView;

