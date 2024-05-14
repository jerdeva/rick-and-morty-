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
          <h2>{character.name}</h2>         
        </li>
      ))}
       {showModal && selectedCharacter && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalInfo character={selectedCharacter} closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </ul>
  );
};

export default CharactersList;
