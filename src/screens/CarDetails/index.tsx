import React from 'react';

import { Acessory } from '@components/Acessory';
import { BackButton } from '@components/BackButton';
import { ImageSlider } from '@components/ImageSlider';

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
    About,
    Acessories,
    Footer,
} from './styles';
import { Button } from '@components/Button';

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

                <Acessories>
                    <Acessory name='380Km/h' icon={speedSvg} />
                    <Acessory name='3.2s' icon={accelerationSvg} />
                    <Acessory name='8800 HP' icon={forceSvg} />
                    <Acessory name='Gasolina' icon={gasolineSvg} />
                    <Acessory name='Auto' icon={exchangeSvg} />
                    <Acessory name='2 pessoas' icon={peopleSvg} />
                </Acessories>

                <About>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                    soluta ipsum! Nobis labore, assumenda, dolores unde, tempora
                    suscipit architecto libero laudantium distinctio quas odit
                    alias? Aut eveniet pariatur asperiores ducimus?
                </About>
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                    onPress={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                />
            </Footer>
        </Container>
    );
}
