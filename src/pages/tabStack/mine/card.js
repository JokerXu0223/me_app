/**
 * @component card.js
 * @description 卡券效果
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

class MineCard extends Component {
  state = {};

  render() {
    return (
      <BasicPage>
        <Text>我的卡券</Text>
      </BasicPage>
    );
  }
}

MineCard.navigationOptions = () => ({
  title: '卡券效果',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineCard.propTypes = {
};

export default MineCard;
