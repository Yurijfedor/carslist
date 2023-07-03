import { createPortal } from 'react-dom';
import { ModalWrapper } from './modalBackdrop.styled';

export const ModalBackdrop = ({ children, onClose }) => {
  return createPortal(
    <ModalWrapper onClick={onClose}>{children}</ModalWrapper>,
    document.querySelector('#modal-root')
  );
};
