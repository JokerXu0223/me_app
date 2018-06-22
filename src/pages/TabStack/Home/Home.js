/**
 * @component home.js
 * @description 首页
 * @time 2018/6/17
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Platform,
  Text,
  View,
  Button,
} from 'react-native';
import { routers, theme } from '../../../config';
import { LightStatusBar } from '../../../components/Layout';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const ContainerView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

const InstructionsText = styled(Text)`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`;

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '首页',
    headerStyle: theme.headerStyle,
    headerTintColor: theme.mainTextColor,
    headerTitleStyle: theme.headerTitleStyle,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ContainerView>
        <LightStatusBar />
        <WelcomeText>
          Welcome to React Native!
        </WelcomeText>
        <InstructionsText>
          {instructions}
        </InstructionsText>
        <Button
          onPress={() => navigate(routers.details, { user: 'Justin' })}
          title="Details"
        />
      </ContainerView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    setParams: PropTypes.func,
    state: PropTypes.shape({
      key: PropTypes.string,
      routeName: PropTypes.string,
      params: PropTypes.object,
    }),
  }).isRequired,
};

export default HomeScreen;

