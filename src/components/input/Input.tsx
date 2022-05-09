import { FC } from 'react';
import { Container, InputStyle, Label } from './Input.style';

interface InputProps {
  label?: string;
  disable?: boolean;
  onchange?: () => void;
  value?: string;
  name?: string;
}

const Input: FC<InputProps> = ({ label, disable = false, onchange, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle
        disabled={disable}
        onChange={onchange}
        value={value}
        name={label}
      />
    </Container>
  );
};
export default Input;
