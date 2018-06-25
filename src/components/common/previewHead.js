/**
 * @component previewHead.js
 * @description 榜单预览
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import { theme } from '../../constants';

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

class previewHead extends React.Component {
  switchBody = () => {
    const {
      bodyIcon,
      bodyTitle,
      bodyElem,
    } = this.props;
    if (bodyElem) {
      return bodyElem;
    }
    return (
      <BodyView>
        <Image
          source={bodyIcon}
        />
        <BodyTitle>{bodyTitle}</BodyTitle>
      </BodyView>
    );
  }
  render() {
    const {
      leftWidth,
      rightElem,
      containerStyle,
    } = this.props;
    return (
      <MembBirthView style={containerStyle}>
        <View width={leftWidth} />
        {this.switchBody()}
        {rightElem}
      </MembBirthView>
    );
  }
}

previewHead.defaultProps = {
  leftWidth: 49,
  bodyTitle: null,
  bodyIcon: 0,
  rightElem: null,
  bodyElem: null,
  containerStyle: null,
  titleStyle: null,
};

previewHead.propTypes = {
  leftWidth: PropTypes.number,
  bodyTitle: PropTypes.string,
  bodyIcon: PropTypes.number,
  rightElem: PropTypes.element,
  bodyElem: PropTypes.element,
  containerStyle: PropTypes.objectOf(PropTypes.any),
  titleStyle: PropTypes.objectOf(PropTypes.any),
};

export default previewHead;

