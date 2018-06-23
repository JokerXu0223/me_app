/**
 * @component index.js
 * @description 会员
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

import { theme } from '../../../constants';

class MemberScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Member with</Text>
      </Container>
    );
  }
}

MemberScreen.navigationOptions = () => ({
  title: '会员',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

MemberScreen.propTypes = {
};

export default MemberScreen;
