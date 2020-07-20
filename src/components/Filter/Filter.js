import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, Subtitle, SearchContainer } from './styles';
import SearchButton from '../../assets/search.png';

import { Creators as WeatherActions } from '../Dashboard/reducers';

export const Filter = () => {
  const [city, setCity] = useState('');
  const inputSearch = useRef();

  const { isLoading } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  function useDebounce(value, delay = 600) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => setDebounceValue(value), delay);

      return () => clearTimeout(timer);
    }, [value]);

    return debounceValue;
  }

  const debounceFilter = useDebounce(city, 600);

  useEffect(() => {
    dispatch(WeatherActions.getWeather(debounceFilter));
  }, [debounceFilter]);

  const handlerOnFilter = () => {
    const { value } = inputSearch.current;

    if (value !== city) {
      dispatch(WeatherActions.getWeather(debounceFilter));
    }
  };

  const handleOnChange = (value) => {
    setCity(value);

    if (!isLoading) {
      dispatch(WeatherActions.toggleWeatherLoading(true));
    }
  };

  return (
    <>
      <Container>
        <Title>Welcome!</Title>
        <Subtitle>Choose a city:</Subtitle>
        <SearchContainer>
          <input
            ref={inputSearch}
            type="text"
            placeholder="Search by city name"
            maxLength="50"
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button onClick={handlerOnFilter} type="submit">
            <img src={SearchButton} alt="" />
          </button>
        </SearchContainer>
      </Container>
    </>
  );
};
