import styled from 'styled-components';

export const ListaProdutoStyled = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  & li {
    width: 30%;
    list-style-type: none;
  }

  & img {
    width: 100px;
  }
`;
