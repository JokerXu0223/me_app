/**
 * @component mineHeader.jsm.js
 * @description 我的头部
 * @time 2018/6/24
 * @author zhao
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const ContainerView = styled(View)`
    width: 100%;
`

const LinearGradientView = styled(View)`
    width: 100%;
    height: 144px;
    background: #87A8E3;
    flexDirection: row;
`

const HeadImage = styled(Image)`
    left: 15px;
    top: 37px;
    width: 138px;
    height: 138px;
    position: absolute;
`

const LeftView = styled(View)`
    width: 153px;
    height: 100%;
`

const RightView = styled(View)`
    flex: 1;
`

const NameIconView = styled(View)`
    top: 38px;
    left: 14px;
    width: 24px;
    height: 24px;
    position: absolute;

`
const NameIconImage = styled(Image)`
    width: 18px;
    height: 20px;
`
const NameText = styled(Text)`
    font-size: 18px;
    color: #FEFEFE;
    top: 37px;
    left: 49px;
    position: absolute;
`

const PlaceIconView = styled(View)`
    top: 74px;
    left: 20px;
    width: 13px;
    height: 13px;
    position: absolute;
`

const PlaceIcon = styled(Image)`
    width: 11px;
    height: 13px;
`

const PlaceText = styled(Text)`
    font-size: 14px;
    color: #FEFEFE;
    top: 70px;
    left: 49px;
    width: 138px;
    position: absolute;
`

const GoImageView = styled(View)`
    width: 35px;
    justifyContent: center;
    alignItems: center;
`

const GoImage = styled(Image)`
    width: 16px;
    height: 10px;
`
const GayView = styled(View)`
    width: 100%;
    height: 54px;
    flexDirection: row;
`

const DescView = RightView.extend`
    justifyContent: center;
    padding-left: 45px;
    padding-right: 15px;
`

const DescText = styled(Text)`
    font-size: 12px;
    color: #A7A7A7;
`

class mineHeader extends React.PureComponent {
    render() {
        const { data } = this.props;
        return (
            <ContainerView>
                <LinearGradientView>
                    <LeftView />
                    <RightView>
                        <NameIconView><NameIconImage source={require('../../assets/mine/persion.png')} /></NameIconView>
                        <NameText>{`导购姓名`}</NameText>

                        <PlaceIconView><PlaceIcon source={require('../../assets/mine/place.png')}></PlaceIcon></PlaceIconView>
                        <PlaceText>{`苏州高新区竹园路大牌分店`}</PlaceText>
                    </RightView>

                    <GoImageView>
                        <GoImage source={require('../../assets/mine/go.png')} />
                    </GoImageView>
                </LinearGradientView>
                
                <GayView>
                    <LeftView />
                    <DescView>
                        <DescText>{`每天都是新开始，争做第一，加油！fighting！！！`}</DescText>
                    </DescView>
                </GayView>
                
                <HeadImage source={require('../../assets/test/mine_head.png')} />
            </ContainerView>
        );
    }
}

mineHeader.defaultProps = {
    data: {},
};

mineHeader.propTypes = {
    data: PropTypes.objectOf(PropTypes.any),
};

export default mineHeader;
