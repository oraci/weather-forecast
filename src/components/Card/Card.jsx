import React from 'react';
import sunny from '../../assets/sunny.png';
import cloudy from '../../assets/cloudy.png';
import rain from '../../assets/rain.png';

import { Wind, Temperature, Container, WrapperContent, Content, Header, SpanImg, WeekDay } from './styles';

export default function Card({data}) {
  const {dt, clouds, temp, speed, weather} = data;

  const getWeekDay= (dt) => {
    const days = ['DOM','SEG','TER','QUA','QUI','SEX','SAB'];
    const date = new Date(dt * 1000);

    return days[date.getDay()];
  }

  const icons = {
    Clouds: cloudy,
    Rain: rain,
    Clear: sunny
  }

  return (
    <Container>       
      <WrapperContent>
        <Header>
          <SpanImg img={icons[weather[0].main]} />
          <WeekDay>{getWeekDay(dt)}</WeekDay>
        </Header>
        <Content>
            <Temperature>{temp.day} °C</Temperature>
            <Wind>
              <div>{speed} m/s</div>
              <div>clouds: {clouds} %</div>
            </Wind>
        </Content>
      </WrapperContent>
    </Container>
  );
}
