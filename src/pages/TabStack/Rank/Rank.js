/**
 * @component index.js
 * @description 排行
 * @time 2018/6/21
 * @author JUSTIN XU
 */
import React from 'react';
import { View, Text } from 'react-native';

class RankScreen extends React.Component {
  static navigationOptions = () => ({
    title: '排行',
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Rank with</Text>
      </View>
    );
  }
}

RankScreen.propTypes = {
};

export default RankScreen;
