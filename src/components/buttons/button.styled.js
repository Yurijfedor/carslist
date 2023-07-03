import { styled } from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 5px 10px;
  border: 1px solid blue;
  border-radius: 5px;
  transition: transform 200ms;
  background-color: ${({ className }) =>
    className === 'active' ? 'blue' : 'initial'};
  color: ${({ className }) => (className === 'active' ? 'white' : 'initial')};
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
