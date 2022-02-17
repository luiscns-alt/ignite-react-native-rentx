import React from 'react';

import { BackButton } from '@components/BackButton';

import { Container, Header, CarImages } from './styles';
import { ImageSlider } from '@components/ImageSlider';

export function CarDetails() {
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
        </Container>
    );
}
