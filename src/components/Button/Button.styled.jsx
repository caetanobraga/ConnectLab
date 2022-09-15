import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ primary }) => (primary ? "black" : "white")};
  color: ${({ primary }) => (primary ? "white" : "black")};

  &:hover {
    opacity: 0.5;
  }
`;
export const ButtonStyledOutline = styled(ButtonStyled)`
  background-color: blue;
  color: yellow;
`;
