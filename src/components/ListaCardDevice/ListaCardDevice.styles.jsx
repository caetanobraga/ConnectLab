import styled from 'styled-components';

export const InformacoesDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  min-width: 40%;
`;
export const DetalhesInformacoesDevice = styled.div`
  display: flex;

  margin-top: 2px;
  align-items: center;
  & h8 {
    font-size: 0.6rem;
  }
`;

export const ListaCardDeviceStyled = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  & li {
    width: 30%;
    min-width: 300px;
    list-style-type: none;
  }

  & img {
    width: 100px;
  }

  & Button {
    border: none;
    background-color: transparent;
  }
`;
