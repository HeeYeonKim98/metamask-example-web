import { FC } from 'react';
import { Container, ButtonStyle } from './Button.style';

interface ButtonProps {
  title: string;
  onclick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, onclick }) => {
  return (
    <Container>
      <ButtonStyle onClick={onclick}>{title}</ButtonStyle>
    </Container>
  );
};

export default Button;
