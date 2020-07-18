import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  label {
    font-size: 40px;
  }
  label.title-bold {
    font-weight: 800;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid grey;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;

  width: 90%;
  height: 80px;
  border-radius: 30px;

  background-color: none;
  position: relative;

  *:focus {
    outline: none;
  }

  input {
    color: white;
    font-size: 28px;
    letter-spacing: 2px;
    flex-grow: 2;
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 20px 60px 20px 20px;
    border-radius: 4px;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 5px;
    right: 0;
    height: 90%;
    width: 10%;

    img {
      filter: invert(100%);
      width: 22px;
      height: 23px;
      cursor: pointer;
    }
  }
`;
