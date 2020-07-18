import React from 'react';
import { icons, getWeekDay } from '../../helpers/helpers';

import {
  Wind,
  Temperature,
  Container,
  WrapperContent,
  Content,
  Header,
  SpanImg,
  WeekDay,
} from './styles';

export const Card = ({ data, onSelectedCard }) => {
  const { dt, clouds, temp, speed, weather } = data;

  const handleOnClick = () => {
    onSelectedCard(data);
  };

  return (
    <Container onClick={handleOnClick}>
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
};
