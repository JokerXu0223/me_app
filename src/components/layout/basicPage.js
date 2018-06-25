/**
 * @component basicPage
 * @description 基础page
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

import CommStatusBar from './commStatusBar';

const ContainerView = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
`;

class BasicPage extends React.PureComponent {
  render() {
    return (
      <ContainerView>
        <CommStatusBar />
        {this.props.children}
      </ContainerView>
    );
  }
}

BasicPage.propTypes = {};

export default BasicPage;
