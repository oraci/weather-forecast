import React from 'react';
import sunny from '../../assets/sunny.png';
import Text from '../../components/Text/Text';

import { WrapperContainer, Container, Weather, Temp, TempContainer, City, Content, SpanImg, Header, Name } from './styles';

export default function Detail() {
  return (
    <>
      <Container>
        <WrapperContainer>
          <Header>
            <City>
              <p>Hoje</p>
              <Name>Cidade</Name>
            </City>
            <SpanImg img={sunny}></SpanImg>
          </Header>  
          <Content>
            <TempContainer>
              <Temp>28 °C</Temp>
              <p>Scatted clouds</p>
              <p>14</p>
            </TempContainer>
            <Weather>
              <Text label={"Wind"} info={"3.5/ms"} />
            </Weather>
          </Content>
        </WrapperContainer>
      </Container>
    </>
  );
}
