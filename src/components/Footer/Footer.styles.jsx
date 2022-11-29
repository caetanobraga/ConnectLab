import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.secundary};
  height: 200px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 600px) {
    & ul {
      flex-direction: column;
      gap: 3px;
    }
  }
`;
