import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const ButtonStyle = styled.button`
  border-radius: 5px;
  margin-bottom: 70px;
  width: 20%;
  height: 70px;
  border: 0;
  background-color: #224fac;
  color: white;
  font-weight: 100;
  font-size: medium;
  cursor: pointer;
  :hover {
    background: #0d1f44;
    transition: 0.2s;
  }
`;

export { Container, ButtonStyle };
