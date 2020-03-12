import React from 'react';
import sunny from '../../assets/sunny.png';
import cloudy from '../../assets/cloudy.png';
import rain from '../../assets/rain.png';
import storm from '../../assets/storm.png';

import { Wind, Temperature, Container, WrapperContent, Content, Header, SpanImg, WeekDay } from './styles';

export default function Card({data}) {
  const {dt, main, wind, clouds} = data;

  const getWeekDay= (dt) => {
    const days = ['DOM','SEG','TER','QUA','QUI','SEX','SAB'];

    const weekday = dt * 1000;
    const newDate = new Date();

    newDate.setTime(weekday);

    return days[newDate.getDay()];
  }


  return (
    <>
      <Container>       
        <WrapperContent>
          <Header>
            <SpanImg img={sunny} />
            <WeekDay>{getWeekDay(dt)}</WeekDay>
          </Header>
          <Content>
              <Temperature>{main.temp} °C</Temperature>
              <Wind>
                <div>{wind.speed} m/s</div>
                <div>clouds: {clouds.all} %</div>
              </Wind>
          </Content>
        </WrapperContent>
      </Container>
    </>
  );
}
