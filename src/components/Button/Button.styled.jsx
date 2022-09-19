import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ primary }) => (primary ? "black" : "white")};
  /* color: ${({ primary }) => (primary ? "white" : "black")}; */

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 5px;
  border-radius: 5px;
  width: 33%;
  &:hover {
    opacity: 0.5;
  }
`;
export const ButtonStyledOutline = styled(ButtonStyled)`
  background-color: blue;
  color: yellow;
`;
