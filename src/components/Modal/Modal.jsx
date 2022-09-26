import { ModalOverlayStyled, ModalStyled } from './Modal.styles';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const portalRoot = document.getElementById('portal-root');

export const Modal = ({ children, isOpen, close }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalOverlayStyled>
      <ModalStyled>
        <button type="button" onClick={close}>
          X
        </button>
        <>{children}</>
      </ModalStyled>
    </ModalOverlayStyled>,
    portalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
