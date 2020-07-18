import React, { useState, useRef } from 'react';
import { debounce } from 'debounce';

import { Container, Title, SearchContainer } from './styles';
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
        <Title>
          <label>Seja bem vindo</label>
          <label className="title-bold">Selecione uma Cidade</label>
        </Title>
        <SearchContainer>
          <input
            ref={inputSearch}
            type="text"
            placeholder="Pesquisar por cidade"
            maxLength="50"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handlerOnFilter}>
            {' '}
            <img src={SearchButton} alt="" />
          </button>
        </SearchContainer>
      </Container>
    </>
  );
};
