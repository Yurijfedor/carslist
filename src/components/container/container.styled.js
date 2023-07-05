import { styled } from 'styled-components';

export const ContainerMain = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 920px) {
    padding: 30px 15px;
    width: 920px;
  }
  @media screen and (min-width: 1280px) {
    padding: 70px 16px 200px 16px;
    width: 1280px;
  }
`;
