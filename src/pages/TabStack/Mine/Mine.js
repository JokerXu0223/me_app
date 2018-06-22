/**
 * @component index.js
 * @description 我的
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import React from 'react';
import { View, Text } from 'react-native';

class MineScreen extends React.Component {
  static navigationOptions = () => ({
    title: '我的',
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine with</Text>
      </View>
    );
  }
}

MineScreen.propTypes = {
};

export default MineScreen;
