import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { Button } from '@components/Button';
import { BackButton } from '@components/BackButton';
import { Calendar } from '@components/Calendar';

import ArrowSvg from '@assets/arrow.svg';

import { RootStackParamList } from '../../@types/navigation';

import {
    Container,
    Content,
    DateInfo,
    DateTitle,
    DateValue,
    Footer,
    Header,
    RentalPeriod,
    Title,
} from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export function Scheduling() {
    const theme = useTheme();
    const { navigate } = useNavigation<HomeScreenNavigationProp>();

    function handleConfirmRental() {
        navigate('SchedulingDetails');
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />

                <BackButton onPress={() => {}} color={theme.colors.text} />

                <Title>
                    Escolha uma {'\n'}
                    linha data de ínicio e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>20/02/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    );
}
