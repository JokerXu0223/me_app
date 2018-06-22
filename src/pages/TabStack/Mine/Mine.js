/**
 * @component index.js
 * @description 我的
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import { theme } from '../../../constants';

class MineScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Mine with</Text>
      </Container>
    );
  }
}

MineScreen.navigationOptions = () => ({
  title: '我的',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MineScreen.propTypes = {
};

export default MineScreen;
