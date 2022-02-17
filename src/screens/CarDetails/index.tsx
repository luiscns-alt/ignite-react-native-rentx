import React from 'react';

import { BackButton } from '@components/BackButton';

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
    About,
} from './styles';
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

                <About>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                    soluta ipsum! Nobis labore, assumenda, dolores unde, tempora
                    suscipit architecto libero laudantium distinctio quas odit
                    alias? Aut eveniet pariatur asperiores ducimus?
                </About>
            </Content>
        </Container>
    );
}
