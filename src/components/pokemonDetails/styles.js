import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 10px;
`;
export const WrapperAbilities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  align-items: space-around;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const WrapperImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  align-items: space-around;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const Typography = styled.span`
  color: blue;
  font-weight:600;
  font-size:25px;
 text-align:center;
  }
`;
export const H3 = styled.h3`
  color: blue;
  font-weight:500;
  font-size:20px;
 text-align:center;
 margin-bottom:10px;
  }
`;
export const WrapperButton = styled(Button)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width: auto;
`;
export const IMG = styled.img`
  height: 200px;
  width: 200px;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;
export const CardStyle = styled(Card)`
  padding: 10px;
  margin-top: 10px;
  background: #bdb76b;
`;
