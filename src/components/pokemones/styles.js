import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 1em;
  padding: 0.25em 1em;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: flex-start;
  justify-content: space-around;
  /*grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);*/
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperButton = styled(Button)`
  margin-top: 10px;

  width: 120px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Typography = styled.span`
  color: black;
  
 
  }
`;

export const CardStyle = styled(Card)`
  padding: 5px;
  color: snow;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  color: blue;
  font-weight:700;
  font-size:30px;
 text-align:center;
 margin-top:20px;
 margin-bottom:10px;

  }
`;
