import { useState } from "react"
import React from "react";
import PropTypes from 'prop-types';
import { BTN } from "../CharactersList/CharactersList.styled";

export const SortCharacters = ({ update, data }) => {
    
    const [ascending, setAscending] = useState(true);

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            return ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });

        update(sortedData);
        setAscending(!ascending);
    };
    
    return (
        <div>
            <BTN className="btn" onClick={handleSort}>Sort by name</BTN>
        </div>
    );
};

SortCharacters.propTypes = {
  update: PropTypes.any.isRequired,
  data: PropTypes.array.isRequired,
}
