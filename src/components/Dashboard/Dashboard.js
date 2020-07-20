import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Filter } from '../Filter/Filter';
import { CardList } from '../CardList/CardList';
import { Detail } from '../Detail/Detail';

import { WATCH_GET_WEATHER, WATCH_IS_WEATHER_LOADING } from './constants';
import { Container, Content, Loading, Text } from './styles';

function Dashboard({ weather, isLoading, getWeather, toggleWeatherLoading }) {
  const [detail, setDetail] = useState();
  const [today, setToday] = useState(true);

  useEffect(() => {
    if (weather.length > 0) {
      setDetail(weather[0]);
      setToday(true);
    } else {
      setDetail();
      setToday(false);
    }
  }, [weather]);

  const onFilter = (city) => {
    toggleWeatherLoading(true);
    getWeather(city);
  };

  const onSelectedCard = (data) => {
    setDetail(data);
    setToday(false);
  };

  return (
    <Container>
      <Content>
        <Filter onFilter={onFilter} />
        {!isLoading ? (
          <CardList data={weather} onSelectedCard={onSelectedCard} />
        ) : (
          <Loading>Loading...</Loading>
        )}
      </Content>
    </Container>

    /* <ContainerWrapper>
      <Container>
        <Filter onFilter={onFilter} />
        <Text>Forecast for the week:</Text>
        {!isLoading ? (
          <CardList data={weather} onSelectedCard={onSelectedCard} />
        ) : (
          <Loading>Loading...</Loading>
        )}
      </Container>
      <Detail data={detail} today={today} />
    </ContainerWrapper> */
  );
}

const mapStateToProps = ({ weather }) => {
  return {
    ...weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city) => dispatch({ type: WATCH_GET_WEATHER, city }),
    toggleWeatherLoading: (isLoading) =>
      dispatch({ type: WATCH_IS_WEATHER_LOADING, isLoading }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
