import { FC } from 'react';
import styled from 'styled-components';
import { Connect, Permission, Transection } from '../components/home';

const Home: FC = () => {
  return (
    <Container>
      <h1>MetaMask Example</h1>
      <Connect />
      <Permission />
      <Transection />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 60px;
  }
`;

export default Home;
