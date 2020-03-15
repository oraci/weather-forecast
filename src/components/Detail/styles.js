import styled from 'styled-components';
import img from '../../assets/cloud-background.png';

export const Container = styled.div`
    display: flex;
    padding: 10px;
    width: 600px;

    p {
        margin: 0px;
    }    
`;

export const WrapperContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: white;
    border-radius: 16px;
    flex-direction: column;
`;

export const SpanImg = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  filter: opacity(.5) drop-shadow(0 0 0 #6b4983);
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const City = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
`;

export const Name = styled.p`
    font-weight: bold;
`;

export const TempContainer = styled.div`
    display: flex;
    flex-direction: column; 
    height: 450px;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export const Temp = styled.p`
    font-size: 72px;
    font-weight: bold;
`;


export const Weather = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
`;

export const NoResults = styled.div`
    justify-content: center;
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 24px;
`;