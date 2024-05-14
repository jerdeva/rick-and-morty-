import React from 'react';
import PropTypes from 'prop-types';

export const ModalInfo = ({ character, closeModal }) => {
  return (
      <div onClick={closeModal}>
          <img
            src={character.image} 
            alt={character.name}
          />
          <h2>{character.name}</h2>         
          <p>Status: {character.status}</p>          
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>         
          <p>Created: {character.created}</p>          
    </div>
  );
};

ModalInfo.propTypes = {
  character: PropTypes.string.isRequired,
  closeModal: PropTypes.string.isRequired,
}
