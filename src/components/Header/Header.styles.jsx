import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.secundary};
  height: 80px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;

  & ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  & li {
    background-color: transparent;
    list-style: none;
    text-align: none;
  }

  & a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    & ul {
      flex-direction: column;
      gap: 3px;
    }
  }
`;

export const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
