/**
 * @component index.js
 * @description 排行
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import { theme } from '../../../constants';

class RankScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Rank with</Text>
      </Container>
    );
  }
}

RankScreen.navigationOptions = () => ({
  title: '排行',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});


RankScreen.propTypes = {
};

export default RankScreen;
