import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  width: 358px;
  height: 20px;
`;
