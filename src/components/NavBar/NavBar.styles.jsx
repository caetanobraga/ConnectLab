import styled from 'styled-components';

export const NavBarStyled = styled.div`
  display: flex;

  justify-content: space-between;

  & Link {
    text-decoration: none;
  }

  & Button {
    border: 1px solid;
    border-radius: 20px;
    font-size: 10px;
    font-weight: bolder;
    color: #351010;
  }
  & a {
    color: #351010;
  }
`;
