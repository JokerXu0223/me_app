/**
 * @component index.js
 * @description 会员
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '../../../constants';

class MemberScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Member with</Text>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Text>
            Sign in with Facebook
          </Text>
        </LinearGradient>
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
