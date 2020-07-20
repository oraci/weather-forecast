import React, { useState, useRef } from 'react';
import { debounce } from 'debounce';

import { Container, Title, Subtitle, SearchContainer } from './styles';
import SearchButton from '../../assets/search.png';

export const Filter = ({ onFilter }) => {
  const [city, setCity] = useState('');
  const inputSearch = useRef();

  const handlerOnFilter = () => {
    if (city) {
      onFilter(city);
    }
  };

  const setSearchTerm = debounce((search) => {
    if (search !== city) {
      onFilter(search);
      setCity(search);
    }
  }, 500);

  const handleKeyPress = (event) => {
    const { value } = inputSearch.current;

    if (event.key === 'Enter' && value !== city) {
      onFilter(city);
    }
  };

  return (
    <>
      <Container>
        <Title>Welcome!</Title>
        <Subtitle>Welcome! Choose a city:</Subtitle>
        <SearchContainer>
          <input
            ref={inputSearch}
            type="text"
            placeholder="Search by city name"
            maxLength="50"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handlerOnFilter} type="submit">
            <img src={SearchButton} alt="" />
          </button>
        </SearchContainer>
      </Container>
    </>
  );
};
