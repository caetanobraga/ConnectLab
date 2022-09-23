import styled from 'styled-components';

export const DispositivosStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  justify-content: flex-start;
  margin-top: 25px;
`;

export const ListaDispositivos = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
  gap: 10px;
`;
