import React from 'react';
import Text from '../../components/Text/Text';
import {icons, getWeekDay, getHour, getMonth, getYear} from '../../helpers/helpers';

import { WrapperContainer, Container, Weather, Temp, TempContainer, City, Content, SpanImg, Header, Name, NoResults, Degree, Info } from './styles';

export const Detail = ({data, today}) => {
  const {
    dt,
    temp,
    weather,
    speed, 
    pressure, 
    humidity,
    sunrise,
    sunset,
    city
  } = data || {};

  return (
    <Container>
        <WrapperContainer>
          {!data ?
            (<NoResults>Nenhum registro</NoResults>)
            : 
            (
              <>
                <Header>
                  <City>
                    <p>{today ? "Hoje" : getWeekDay(dt)}</p>
                    <Name>{city.name}</Name>
                  </City>
                  <SpanImg img={icons[weather[0].main]}></SpanImg>
                </Header>  
                <Content>
                  <TempContainer>
                    <Temp>{Math.round(temp.day)}</Temp>
                    <Degree> °C</Degree>
                    <Info>{weather[0].description}</Info>
                    <Info>{`${getHour(dt)} ${getMonth(dt)} ${getYear(dt)}`}</Info>
                  </TempContainer>
                  <Weather>
                    <Text label={"Wind"} info={`${speed} m/s`} />
                    <Text label={"Cloudiness"} info={weather[0].description} />
                    <Text label={"Pressure"} info={pressure} />
                    <Text label={"Humidity"} info={`${humidity} %`} />
                    <Text label={"Sunrise"} info={getHour(sunrise)} />
                    <Text label={"Sunset"} info={getHour(sunset)} />
                    <Text label={"Geo coords"} info={`[${city.coord.lon}, ${city.coord.lat}]` } />
                  </Weather>
                </Content>
              </>
            )}
      </WrapperContainer>
    </Container>
  );
}
