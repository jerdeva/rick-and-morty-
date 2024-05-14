import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../Api/Api';
import CharactersList from '../CharactersList/CharactersList';
import { SortCharacters } from '../SortCharacters/SortCharacters';
import FilterCharacters from '../FilterCharacters/FilterCharacters';

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
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastCharacter >= filteredCharacters.length}>Next</button>
            </div>
        </div>
    );
};

export default Home;




