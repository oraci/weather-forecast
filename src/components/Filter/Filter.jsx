import React, {useState} from 'react';

import { Container, Title, SearchContainer } from './styles';
import SearchButton from '../../assets/search.png';

export default function Filter({onFilter}) {
  const [city, setCity] = useState();

  const handlerOnFilter = () => {
    if (city) {
      onFilter(city);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onFilter(city);
    }
  }

  return (
    <>
      <Container>
        <Title>
            <label>Seja bem vindo</label>
            <label className='title-bold'>Selecione uma Cidade</label>
        </Title>
        <SearchContainer>
            <input 
              type="text" 
              placeholder="Pesquisar por cidade" 
              maxLength="50"
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress} 
            />
            <button onClick={handlerOnFilter}> <img src={SearchButton} alt=""/></button>
        </SearchContainer>
      </Container>          
    </>
  );
}
