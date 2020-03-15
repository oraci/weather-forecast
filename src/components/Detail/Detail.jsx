import React from 'react';
import Text from '../../components/Text/Text';
import {icons, getWeekDay, getHour} from '../../helpers/helpers';

import { WrapperContainer, Container, Weather, Temp, TempContainer, City, Content, SpanImg, Header, Name, NoResults } from './styles';

export const Detail = ({data}) => {
  const {
    dt,
    temp,
    weather,
    speed, 
    clouds, 
    pressure, 
    humidity,
    sunrise,
    sunset
  } = data || {};

  return (
    <Container>
        <WrapperContainer>
          {!data ?
            (<NoResults>Sem resultado</NoResults>)
            : 
            (
              <>
                <Header>
                  <City>
                    <p>{getWeekDay(dt)}</p>
                    <Name>Cidade</Name>
                  </City>
                  <SpanImg img={icons[weather[0].main]}></SpanImg>
                </Header>  
                <Content>
                  <TempContainer>
                    <Temp>{temp.day} °C</Temp>
                    <p>{weather[0].description}</p>
                    <p>14</p>
                  </TempContainer>
                  <Weather>
                    <Text label={"Wind"} info={speed} />
                    <Text label={"Cloudiness"} info={weather[0].description} />
                    <Text label={"Pressure"} info={pressure} />
                    <Text label={"Humidity"} info={humidity} />
                    <Text label={"Sunrise"} info={getHour(sunrise)} />
                    <Text label={"Sunset"} info={getHour(sunset)} />
                    <Text label={"Geo coords"} info={"3.5/ms"} />
                  </Weather>
                </Content>
              </>
            )}
      </WrapperContainer>
    </Container>
  );
}
