import styled from "styled-components";

export const LabelInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-weight: bold;
  font-size: smaller;
  & label {
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;
  }

  & input {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    width: 358px;
    padding-left: 3px;
    height: 25px;
  }

  & span {
    color: red;
  }
`;
