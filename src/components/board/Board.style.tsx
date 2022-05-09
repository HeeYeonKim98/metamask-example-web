import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
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

const Title = styled.div`
  font-weight: 500;
  font-size: 25px;
  margin-right: 450px;
`;

const Content = styled.div`
  margin: 25px 0px;
  font-size: 18px;
  font-weight: 300;
`;

export { Container, Button, Title, Content };
