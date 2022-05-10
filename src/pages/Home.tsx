import { FC } from 'react';
import styled from 'styled-components';
import {
  Connect,
  Permission,
  Transection,
  ChangeChain,
  InquireChain,
} from '../components/home';

const Home: FC = () => {
  return (
    <Container>
      <h1>MetaMask Example</h1>
      <Connect />
      <Permission />
      <Transection />
      <InquireChain />
      <ChangeChain />
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
