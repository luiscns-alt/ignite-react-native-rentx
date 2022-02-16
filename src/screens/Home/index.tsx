import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import { Container, Header, TotalCars, HeaderContent } from './styles';

export function Home() {
    const carData = {
        brand: 'Audi',
        name: 'SR Coupé',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://image.pngaaa.com/845/4774845-middle.png',
    };
    const carDataTwo = {
        brand: 'Porshe',
        name: 'Panamera',
        rent: {
            period: 'AO DIA',
            price: 340,
        },
        thumbnail:
            'https://img2.gratispng.com/20180517/zzw/kisspng-2018-porsche-panamera-2015-porsche-panamera-porsch-5afe197550f488.4299338415266021013316.jpg',
    };

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>
            <Car data={carData} />
            <Car data={carDataTwo} />
        </Container>
    );
}
