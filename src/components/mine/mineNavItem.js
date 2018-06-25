/**
 * @component mineItem.jsm.js
 * @description navItem
 * @time 2018/6/24
 * @author zhao
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Icon } from 'native-base';


const ContainerView = styled(TouchableOpacity)`
    width: 100%;
    height: 60px;
    padding: 0 15px;
`;

const BorderView = styled(View)`
    flex: 1;
    height: 100%;
    alignItems: center;
    justifyContent: space-between;
    borderBottomWidth: 1px;
    borderBottomColor: #F6F6F6;
    flexDirection: row;
`;

const LeftView = styled(View)`
    flex: 1;
    height: 100%;
    flexDirection: row;
    alignItems: center;
`;

const IconView = styled(View)`
    width: 25px;
    height: 25px;
    alignItems: center;
    justifyContent: center;
`;

const TitleText = styled(Text)`
    font-size: 16px;
    color: #373737;
    marginLeft: 14px;
`;

const RightView = styled(View)`
    width: 8px;
    height: 100%;
    alignItems: center;
    justifyContent: center;
`;

class mineNavItem extends React.PureComponent {
  render() {
    const { data, onPress } = this.props;
    return (
      <ContainerView onPress={onPress}>
        <BorderView>
          <LeftView>
            <IconView>
              <Image source={data.icon} />
            </IconView>
            <TitleText>{data.title}</TitleText>
          </LeftView>
          <RightView>
            <Icon
              ios="ios-arrow-forward"
              android="ios-arrow-forward"
              style={{
                fontSize: 20,
                color: '#C6C6C6',
              }}
            />
          </RightView>
        </BorderView>
      </ContainerView>
    );
  }
}

mineNavItem.defaultProps = {
  data: {},
  onPress: () => null,
};

mineNavItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
};

export default mineNavItem;
