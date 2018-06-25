/**
 * @component rankItem.js
 * @description 排行条目
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
import { theme } from '../../constants';
import BoxShadow from '../common/boxShadow';
import { ImageView } from '../styles/headImage';

const ItemView = styled(View)`
  background: #FFFFFF;
  border-radius: 4px;
  width: 110px;
  align-self: center;
  align-items: center;
  padding-top: 11px;
  padding-bottom: 10px;
  position: relative;
`;

const NameText = styled(Text)`
  font-family: ${theme.fontMedium};
  font-size: 16px;
  color: #515151;
  letter-spacing: -0.5px;
  padding-top: 7px;
`;

const RankNumView = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  width: 28px;
  height: 28px;
  align-items: center;
`;

class RankItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    const ios = Platform.OS === 'ios';
    const boxConfig = {
      width: 110,
      height: 110,
      color: '#b9b9b9',
      border: 4,
      radius: 4,
      opacity: 0.2,
      x: ios ? 8 : 14,
      y: 2,
      style: { width: '100%', marginVertical: 10 },
    }
    return (
      <BoxShadow
        setting={boxConfig}
      >
        <ItemView>
          <ImageView
            source={item.thumbnail}
          />
          <NameText>{item.name}</NameText>
          <RankNumView>
            {
              item.ranking === 1
              &&
              <Image source={require('../../assets/rank/first.png')} />
            }
            {
              item.ranking === 2
              &&
              <Image source={require('../../assets/rank/second.png')} />
            }
            {
              item.ranking === 3
              &&
              <Image source={require('../../assets/rank/third.png')} />
            }
          </RankNumView>
        </ItemView>
      </BoxShadow>
    );
  }
}

RankItem.defaultProps = {
  item: {},
};

RankItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};

export default RankItem;
