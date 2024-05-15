import React from 'react';
import PropTypes from 'prop-types';

export const ModalInfo = ({ character, closeModal }) => {
  return (
      <div onClick={closeModal} >
          <img
            src={character.image} 
            alt={character.name}
          />
      <h2>{character.name}</h2>  
      <div className="bg-blue-500">
                  <p>Status: {character.status}</p>          
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>         
          <p>Created: {character.created}</p>  
      </div>
        
    </div>
  );
};

ModalInfo.propTypes = {
  character: PropTypes.any.isRequired,
  closeModal: PropTypes.any.isRequired,
}
