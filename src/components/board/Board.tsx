import { FC } from 'react';
import Divider from '../divider/Divider';
import { Container, Title, Content } from './Board.style';

interface BoardProps {
  title: string;
  content?: string;
}

const Board: FC<BoardProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
      <Content>{content}</Content>
    </Container>
  );
};

export default Board;
