/**
 * @component index.js
 * @description 我的
 * @time 2018/6/16
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { Container } from 'native-base';

import { theme } from '../../../constants';
import { AccoModal } from '../../../components/auth';

import notLoginImage from '../../../assets/miner/notLgoin.png';

const ContainerView = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class MineScreen extends React.Component {
  state = {
    visible: false,
  }
  hideModal = () => {
    this.setState({ visible: true });
  }
  doLogin = () => {
    // TODO add login code
    this.setState({ visible: false });
  }
  render() {
    const {
      state: {
        visible,
      },
    } = this;
    const modalProps = {
      title: '您还未登录任何账号',
      buttonText: '去登录注册',
      headImage: notLoginImage,
      visible,
      hideModal: this.hideModal,
      doLogin: this.doLogin,
    };
    return (
      <ContainerView>
        <Text onPress={() => this.setState({ visible: true })}>Click me</Text>
        <AccoModal {...modalProps} />
      </ContainerView>
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
