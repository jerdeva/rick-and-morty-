import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalInfo } from '../Modal/ModalInfo';
import PropTypes from 'prop-types';
import { LIST } from './CharactersList.styled';

const CharactersList = ({ characters }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const toggleModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(prevState => !prevState);
  };
    
  return (
    <LIST>
      {characters.map(character => (
        <li key={character.id}>
          <img 
            src={character.image} 
            alt={character.name} 
            onClick={() => toggleModal(character)}
          />
          <h2>{character.name}</h2>         
        </li>
      ))}
       {showModal && selectedCharacter && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalInfo character={selectedCharacter} closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </LIST>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharactersList;
