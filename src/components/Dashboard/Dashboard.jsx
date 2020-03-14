import React from 'react';
import { connect } from 'react-redux';

import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import Detail from '../Detail/Detail';

import { WATCH_GET_WEATHER, WATCH_IS_WEATHER_LOADING } from './constants';
import { Container } from './styles';

function Dashboard({ weather, isLoading, getWeather, toggleWeatherLoading }) {
  const onFilter = (city) => {
    toggleWeatherLoading(true);
    getWeather(city);
  }

  return (
    <Container>
      <Filter onFilter={onFilter} />
      {!isLoading ? (<CardList data={weather}/>) : <div>Loading...</div>}
    </Container>
  )
}

const mapStateToProps = ({weather}) => {
  return {
    ...weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: city => dispatch({ type: WATCH_GET_WEATHER, city }),
    toggleWeatherLoading: isLoading => dispatch({type: WATCH_IS_WEATHER_LOADING, isLoading}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);