import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../Api/Api';
import CharactersList from '../CharactersList/CharactersList';
import { SortCharacters } from '../SortCharacters/SortCharacters';
import FilterCharacters from '../FilterCharacters/FilterCharacters';
import { BTN, CONTAINER } from '../CharactersList/CharactersList.styled';


const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const heroes = await getAllCharacters();
                setAllCharacters(heroes);
                setFilteredCharacters(heroes); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const handleFilter = (param) => {
        if (!param) {
            setFilteredCharacters(allCharacters);
        } else {
            const filteredData = allCharacters.filter(character => {
                return character.status === param;
            });
            setFilteredCharacters(filteredData);
            setCurrentPage(1); 
        }
    };

    const updateCharacters = (sortedCharacters) => {
        setFilteredCharacters(sortedCharacters);
    }

    return (
        <div>
            <FilterCharacters filter={handleFilter}/>
            <SortCharacters update={updateCharacters} data={filteredCharacters} />
            <CharactersList characters={currentCharacters} />
            <CONTAINER>
                <BTN  className='btn' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</BTN>
                <span>{currentPage}</span>
                <BTN className='btn'  onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastCharacter >= filteredCharacters.length}>Next</BTN>
            </CONTAINER>
        </div>
    );
};

export default Home;




