import styled from 'styled-components';

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  & button {
    float: right;
    background: unset;
    border: unset;
    padding: 8px;
    align-self: flex-end;
  }
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  background-color: lightgray;
  border-radius: 4px;
  max-width: 300px;
  margin: 200px auto 0 auto;
  padding: 10px;

  & select {
    width: 150px;
  }

  & input {
    width: 150px;
  }

  & img {
    width: 200px;
  }
`;
