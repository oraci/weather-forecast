import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  background-color: #54346a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
export const Home = styled.img`
  filter: invert(100%);
  width: 30px;
  height: 30px;
`;
export const DateTime = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  > p {
    align-self: center;
    padding-bottom: 5px;
  }

  > label.label-date {
    opacity: 30%;
  }
`;
