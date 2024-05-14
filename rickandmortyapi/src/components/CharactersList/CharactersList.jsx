import './CharactersList.css'


const CharactersList = ({ characters }) => {

    
    return (
        <ul className='characters-list-container'>
            {characters.map(character => (
                <li key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <p>{character.name}</p>
                    <p>{character.status} </p>
                    <p>{character.gender} </p>
                </li>
            ))}
        </ul>
    )
    
}

export default CharactersList;