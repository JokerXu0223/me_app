/**
 * @component details.js
 * @description 详情页
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { theme } from '../../../constants';

import { CommStatusBar } from '../../../components/layout';

class DetailsScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CommStatusBar />
        <Text>Details with {params.user}</Text>
      </View>
    );
  }
}

DetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: `${navigation.state.params.user}`,
  headerBackTitle: null,
  // headerLeft: null,
  headerStyle: theme.headerStyle,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
  headerBackTitleStyle: {
    color: '#ffffff',
  },
});

DetailsScreen.propTypes = {
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

export default DetailsScreen;
