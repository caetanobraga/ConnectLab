import styled from 'styled-components';

export const PerfilStyled = styled.div`
  margin-top: 25px;
  height: 450px;
`;

export const InformacoesPerfilStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
  }
`;

export const InformacaoSecundariaPerfilStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & Button {
    background-color: transparent;
    border: none;
    font-weight: bold;
  }
`;
