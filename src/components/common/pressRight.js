/**
 * @component pressRight.js
 * @description 按下更多
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, TouchableOpacity, Text } from 'react-native';
import { theme } from '../../constants/index';

const ContainerView = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
`;

const RightText = styled(Text)`
  font-family: ${theme.fontRegular};
  font-size: 16px;
  color: #6A6A6A;
  margin-right: 5px;
`;

class PressRight extends React.PureComponent {
  switchIcon = () => {
    const {
      goIcon,
      suffix,
    } = this.props;
    if (suffix) {
      return suffix;
    }
    if (goIcon) {
      return (
        <Image
          source={goIcon}
        />
      );
    }
    return null;
  }
  render() {
    const {
      title,
      onPress,
      titleStyle,
    } = this.props;
    return (
      <ContainerView onPress={onPress}>
        <RightText style={titleStyle}>
          {title}
        </RightText>
        {this.switchIcon()}
      </ContainerView>
    );
  }
}

PressRight.defaultProps = {
  suffix: null,
  goIcon: require('../../assets/home/go.png'),
  titleStyle: null,
  onPress: () => null,
};

PressRight.propTypes = {
  title: PropTypes.string.isRequired,
  goIcon: PropTypes.number,
  onPress: PropTypes.func,
  suffix: PropTypes.element,
  titleStyle: PropTypes.objectOf(PropTypes.any),
};

export default PressRight;
