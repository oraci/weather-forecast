import React from 'react';

import { Container, ContainerList, Header } from './styles';

import Card from '../Card/Card';

export default function CardList({data}) {
  return (
    <>
      <Container>
        <Header>
            <label> Previsão para a semana:</label>
        </Header>
        <ContainerList>
          {data.length > 0 ? (
            data.map((item, key) => {
              return <Card data={item} key={key}/>
            })
          ) : (
            <div>Sem registros.</div>
          )}
        </ContainerList>
      </Container>
    </>
  );
}
