import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
  background-color: rgb(98, 63, 123);

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;
