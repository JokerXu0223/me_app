/**
 * @component accoModal.js
 * @description 未登陆modal
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ContentView = styled(View)`
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  border-radius: 6;
`;

const HeaderImage = styled(Image)`
  margin-top: 46.5px;
  margin-bottom: 18px;
  width: 104px;
  height: 104px;
`;

const NoticeView = styled(View)`
  flex-direction: column;
  height: 35px;
  justify-content: space-between;
  margin-bottom: 42px;
`;

const AccountText = styled(Text)`
  text-align: center;
  color: #282828;
  font-size: 14px;
`;

const ButtonView = styled(TouchableOpacity)`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #dcdcdc;
`;

const ButtonText = styled(Text)`
  color: #282828;
  font-size: 16px;
`;

class AccoModal extends React.PureComponent {
  render() {
    const {
      title,
      buttonText,
      headImage,
      visible,
      hideModal,
      doLogin,
    } = this.props;
    return (
      <View>
        <Modal
          isVisible={visible}
          onBackdropPress={hideModal}
        >
          <ContentView>
            <HeaderImage source={headImage} />
            <NoticeView>
              <AccountText>{title}</AccountText>
              <AccountText>... ...</AccountText>
            </NoticeView>
            <ButtonView onPress={doLogin}>
              <ButtonText>{buttonText}</ButtonText>
            </ButtonView>
          </ContentView>
        </Modal>
      </View>
    );
  }
}

AccoModal.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  headImage: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  doLogin: PropTypes.func.isRequired,
};

export default AccoModal;
