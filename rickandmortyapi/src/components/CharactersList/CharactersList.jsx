import './CharactersList.css'
import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalInfo } from '../Modal/ModalInfo';

const CharactersList = ({ characters }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const toggleModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(prevState => !prevState);
  };
    
  return (
    <ul className='characters-list-container'>
      {characters.map(character => (
        <li key={character.id}>
          <img 
            src={character.image} 
            alt={character.name} 
            onClick={() => toggleModal(character)}
          />
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.gender}</p>
        </li>
      ))}
      {showModal && selectedCharacter && (
        <Modal onClick={toggleModal}>
          <ModalInfo character={selectedCharacter} />
        </Modal>
      )}
    </ul>
  );
};

export default CharactersList;
