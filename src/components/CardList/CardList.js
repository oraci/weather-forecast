import React from 'react';
import { Card } from '../Card/Card';

import { Container, ContainerList, NoResults } from './styles';

export const CardList = ({ data, onSelectedCard }) => {
  return (
    <Container>
      {data.length > 0 ? (
        <ContainerList>
          {data.map((item, key) => {
            return (
              <Card data={item} key={key} onSelectedCard={onSelectedCard} />
            );
          })}
        </ContainerList>
      ) : (
        <NoResults>Nenhum registro</NoResults>
      )}
    </Container>
  );
};
