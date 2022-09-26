import styled from 'styled-components';

export const HomeStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;

export const WheaterStyled = styled.div`
  width: 100%;
  height: 160px;
  border: 2px solid;
  padding: 5px;
  margin-top: 10px;
`;

export const FiltroStyled = styled.div`
  border: 2px solid;
  margin-top: 5px;
  margin-bottom: 5px;
  gap: 5px;
  display: flex;
  align-self: flex-start;
  padding: 5px;
`;
export const ListaDispositivosStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: fit-content;
  align-items: flex-start;
  padding-top: 25px;
  padding-bottom: 25px;

  & hr {
    width: 100%;
  }
`;

export const ConteudoCardDevicesUser = styled.div`
  background-color: inherit;
`;
