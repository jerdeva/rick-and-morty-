import React from 'react';
import { ModalOverlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onClick,  children}) => {
  return (
    <ModalOverlay className="modal-overlay" onClick={onClick}>
      <ModalContainer className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  onClick: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}
