import React, { useState } from 'react';

const FilterCharacters = ({ filter }) => {
    const [selectedParam, setSelectedParam] = useState('');

    const handleChange = (event) => {
        setSelectedParam(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        filter(selectedParam);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select Status
                <select value={selectedParam} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </label>
            <button type="submit">Apply filter</button>
        </form>
    );
};

export default FilterCharacters;