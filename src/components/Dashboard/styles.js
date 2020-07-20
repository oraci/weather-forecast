import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Loading = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex: 1;
  color: white;
  font-size: 24px;
`;
