import styled from 'styled-components';

export const DispositivosStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  align-items: flex-start;
  padding-top: 25px;
  padding-bottom: 25px;

  & hr {
    width: 100%;
  }

  & Button {
    background-color: transparent;
    border: none;
  }
`;
