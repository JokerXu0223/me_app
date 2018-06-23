/**
 * @component home.js
 * @description 首页
 * @time 2018/6/17
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform } from 'react-native';
import { Container, View, Button, Text } from 'native-base';
import immutable from 'immutable';

import { connect } from 'react-redux';
import { fetchIncrementAction } from '../../../redux/actionTypes/home';
import { routers, theme } from '../../../constants';
import { CommStatusBar } from '../../../components/layout';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const ContainerView = styled(Container)`
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

const ButtonGroup = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchIncrementAction();
  }
  render() {
    const {
      props: {
        fetchIncrementAction,
        homeDemo,
        navigation: { navigate },
      },
    } = this;
    return (
      <ContainerView>
        <CommStatusBar />
        <WelcomeText>
          {JSON.stringify(homeDemo.get('list').toJS())}
        </WelcomeText>
        <WelcomeText>
          {`errMsg: ${homeDemo.get('errMsg') || ''}`}
        </WelcomeText>
        <InstructionsText>
          {instructions}
        </InstructionsText>
        <ButtonGroup>
          <Button
            onPress={() => fetchIncrementAction(1)}
            style={{ width: 100 }}
            Primary
          >
            <Text>Actions</Text>
          </Button>
          <Button
            onPress={() => navigate(routers.details, { user: 'Justin' })}
            style={{ width: 100, marginLeft: 10 }}
            danger
          >
            <Text>Details</Text>
          </Button>
        </ButtonGroup>
      </ContainerView>
    );
  }
}

HomeScreen.navigationOptions = {
  headerTitle: '首页',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
};

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
  fetchIncrementAction: PropTypes.func.isRequired,
  homeDemo: PropTypes.instanceOf(immutable.Map).isRequired,
};

const mapStateToProps = state => ({
  homeDemo: state.homeDemo,
});

const mapDispatchToProps = ({
  fetchIncrementAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

