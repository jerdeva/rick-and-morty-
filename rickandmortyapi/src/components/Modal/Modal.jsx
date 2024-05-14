import React from 'react';

export const Modal = ({ onClick, children }) => {
  return (
    <div className="modal-overlay" onClick={onClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

