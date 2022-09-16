import styled from "styled-components";

export const CadastrarStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const FormCadastro = styled.div`
  display: flex;
`;

export const ItemFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-weight: bold;
  font-size: smaller;
`;
