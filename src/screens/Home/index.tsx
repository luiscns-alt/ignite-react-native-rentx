import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StackNavigationProp } from '@react-navigation/stack';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import { RootStackParamList } from '../../@types/navigation';

import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export function Home() {
    const { navigate } = useNavigation<HomeScreenNavigationProp>();

    const carData = {
        brand: 'Audi',
        name: 'SR Coupé',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://image.pngaaa.com/845/4774845-middle.png',
    };

    function handleCarDetails() {
        navigate('CarDetails');
    }

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
            <CarList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => (
                    <Car data={carData} onPress={handleCarDetails} />
                )}
            />
        </Container>
    );
}
