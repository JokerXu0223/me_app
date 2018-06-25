/**
 * @component details
 * @description 排行详情
 * @time 2018/6/25
 * @author JUSTIN XU
 */
import React from 'react';
import { ScrollView, Text } from 'react-native';

import { PanelHeader, TabsPanelView } from '../../../components/common';
import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';


class DetailsScreen extends React.Component {
  state = {
    activeIndex: 1,
  };
  changeHandle = (index) => {
    const { activeIndex } = this.state;
    if (activeIndex === index) return false;
    this.setState({ activeIndex: index });
    return null;
  }
  render() {
    const {
      state: {
        activeIndex,
      },
    } = this;
    return (
      <BasicPage>
        <TabsPanelView>
          <PanelHeader
            title="总榜"
            onPress={() => this.changeHandle(1)}
            active={activeIndex === 1}
          />
          <PanelHeader
            title="上周"
            onPress={() => this.changeHandle(2)}
            active={activeIndex === 2}
          />
          <PanelHeader
            title="上月"
            onPress={() => this.changeHandle(3)}
            active={activeIndex === 3}
          />
        </TabsPanelView>
        <ScrollView>
          <Text>123</Text>
        </ScrollView>
      </BasicPage>
    );
  }
}

DetailsScreen.navigationOptions = () => ({
  title: '会员',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

DetailsScreen.propTypes = {
};

export default DetailsScreen;
