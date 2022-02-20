import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import LogoSvg from '@assets/logo_background_gray.svg';
import DoneSvg from '@assets/done.svg';

import { ConfirmButton } from '@components/ConfirmButton';

import { Container, Content, Footer, Message, Title } from './styles';

import { RootStackParamList } from '../../@types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    const { navigate } = useNavigation<HomeScreenNavigationProp>();

    function handleComfirm() {
        navigate('Home');
    }

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />

            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />

                <Title>Carro Alugado!</Title>

                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>
            <Footer>
                <ConfirmButton title='OK' onPress={handleComfirm} />
            </Footer>
        </Container>
    );
}
