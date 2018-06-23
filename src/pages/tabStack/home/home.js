/**
 * @component home.js
 * @description 首页
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Text } from 'native-base';

import { connect } from 'react-redux';
import { fetchIncrementAsync } from '../../../redux/actions/home';
import { theme } from '../../../constants';
import { CommStatusBar } from '../../../components/layout';
import { OverHeader } from '../../../components/home';

const ContainerView = styled(Container)`
  flex: 1;
`;

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchIncrementAsync();
  }
  render() {
    const {
      props: {
        homeDemo,
      },
    } = this;
    return (
      <ContainerView>
        <CommStatusBar />
        <OverHeader />
        <Text>
          {JSON.stringify(homeDemo)}
        </Text>
        {/*
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
        */}
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
  fetchIncrementAsync: PropTypes.func.isRequired,
  homeDemo: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  homeDemo: state.homeDemo,
});

const mapDispatchToProps = ({
  fetchIncrementAsync,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

