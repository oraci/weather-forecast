import styled from 'styled-components';


export const Container = styled.div`
  margin: 0 10px 20px;
  width: 120px;
  height: 170px;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    background-color: #462a5a;
    transform: translateY(-5px);
    box-shadow: 0 8px 10px 0px rgba(100, 65, 125, 0.35);

    &::after {
      width: 85%;
      transition: all 300ms;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    position: relative;
    width: 40%;
    
    background: linear-gradient(to right, #F16127, #FBB116);

    height: 3px;
    right: -10px;
    top: -2px;
    transition: all 300ms;
  }
`;

export const WrapperContent = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 5px;
`;

export const Header = styled.div`
  height: 115px;
  display: flex;
  justify-content: space-between;
`;

export const SpanImg = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  filter: brightness(0) invert(1);
  cursor: pointer;
`;

export const WeekDay = styled.div`
  font-size: 10px;
  color: white;
  padding-right: 10px;
`;

export const Temperature = styled.div`
  padding-bottom: 5px;
`;

export const Wind = styled.div`
  font-size: 10px;
  color: rgb(168, 163, 171);
  font-weight: bold;
`;