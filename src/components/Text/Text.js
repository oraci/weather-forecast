import React from 'react';
import {Container, Label, Info} from './styles';

export default function Text({label, info}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Info>{info}</Info>
    </Container>
  )
}