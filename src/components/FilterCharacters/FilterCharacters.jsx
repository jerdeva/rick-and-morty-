import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BTN } from '../CharactersList/CharactersList.styled';
import { Form, LabelText,Select,  } from './FilterCharacters.styled';

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
        <Form onSubmit={handleSubmit}>
            <label>
                <LabelText>Select Status</LabelText>
                <Select value={selectedParam} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </Select>
            </label>
            <BTN className="btn" type="submit">Apply filter</BTN>
        </Form>
    );
};

FilterCharacters.propTypes = {
  filter: PropTypes.any.isRequired
}

export default FilterCharacters;