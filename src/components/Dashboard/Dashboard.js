import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Filter } from '../Filter/Filter';
import { CardList } from '../CardList/CardList';
import { Detail } from '../Detail/Detail';

import { Container, Content, Loading } from './styles';

function Dashboard() {
  const [detail, setDetail] = useState();
  const [today, setToday] = useState(true);

  const { weather, isLoading } = useSelector((state) => state.weather);

  useEffect(() => {
    setDetail();
    setToday(false);

    if (weather.length > 0) {
      setDetail(weather[0]);
      setToday(true);
    }
  }, [weather]);

  const onSelectedCard = (data) => {
    setDetail(data);
    setToday(false);
  };

  return (
    <Container>
      <Content>
        <Filter />
        {!isLoading ? (
          <CardList data={weather} onSelectedCard={onSelectedCard} />
        ) : (
          <Loading>Loading...</Loading>
        )}
      </Content>
      {!isLoading && detail && weather.length > 0 && (
        <Detail data={detail} today={today} />
      )}
    </Container>
  );
}

export default Dashboard;
