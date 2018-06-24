/**
 * @component index.js
 * @description 我的
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import styled from 'styled-components';
import { View, Image, ScrollView } from 'react-native';
import { MineHeader, MineNavItem } from '../../../components/mine'

import { theme } from '../../../constants';


const ContainerView = styled(View)`
`

const ListView = styled(View)`
    width: 100%;
    background: #FFFFFF;
`

const NavList = [
    {
        icon: require('../../../assets/mine/statistics.png'),
        title: '我的业绩',
        path: ''
    },
    {
        icon: require('../../../assets/mine/pig.png'),
        title: '我的收益',
        path: ''
    },
    {
        icon: require('../../../assets/mine/card.png'),
        title: '卡券效果',
        path: ''
    },
    {
        icon: require('../../../assets/mine/qrCode.png'),
        title: '我的二维码',
        path: ''
    },
    {
        icon: require('../../../assets/mine/report.png'),
        title: '我的月报',
        path: ''
    }
]

class MineScreen extends React.Component {
    state = {
    }

    render() {
        return (
            <ContainerView>
                <MineHeader />
                <ListView>
                    {
                        NavList.map((obj, index) => <MineNavItem data={obj} key={index} />)
                    }
                </ListView>
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
