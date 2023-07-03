import { ButtonStyled } from './button.styled';

export const Button = ({ text, onClick, key, className, disabled }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      key={key}
      className={className}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};
