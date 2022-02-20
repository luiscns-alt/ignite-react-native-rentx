import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import theme from '../../styles/styled';

import { Acessory } from '@components/Acessory';
import { BackButton } from '@components/BackButton';
import { Button } from '@components/Button';
import { ImageSlider } from '@components/ImageSlider';

import { RootStackParamList } from '../../@types/navigation';

import speedSvg from '@assets/speed.svg';
import accelerationSvg from '@assets/acceleration.svg';
import forceSvg from '@assets/force.svg';
import gasolineSvg from '@assets/gasoline.svg';
import exchangeSvg from '@assets/exchange.svg';
import peopleSvg from '@assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export function SchedulingDetails() {
    const theme = useTheme();
    const { navigate } = useNavigation<HomeScreenNavigationProp>();

    function handleComfirm() {
        navigate('SchedulingComplete');
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={[
                        'https://image.pngaaa.com/845/4774845-middle.png',
                    ]}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lambo</Brand>
                        <Name>Hurrranca</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name='380Km/h' icon={speedSvg} />
                    <Acessory name='3.2s' icon={accelerationSvg} />
                    <Acessory name='8800 HP' icon={forceSvg} />
                    <Acessory name='Gasolina' icon={gasolineSvg} />
                    <Acessory name='Auto' icon={exchangeSvg} />
                    <Acessory name='2 pessoas' icon={peopleSvg} />
                </Acessories>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>19/08/2022</DateValue>
                    </DateInfo>

                    <Feather
                        name='chevron-right'
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>19/08/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleComfirm}
                />
            </Footer>
        </Container>
    );
}
