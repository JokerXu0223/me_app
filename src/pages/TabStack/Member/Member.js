/**
 * @component index.js
 * @description 会员
 * @time 2018/6/21
 * @author JUSTIN XU
 */
import React from 'react';
import { View, Text } from 'react-native';

class MemberScreen extends React.Component {
  static navigationOptions = () => ({
    title: '会员',
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Member with</Text>
      </View>
    );
  }
}

MemberScreen.propTypes = {
};

export default MemberScreen;
