import { useState } from "react"
import '../CharactersList/CharactersList.css'


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
            <button className="btn" onClick={handleSort}>Sort by name</button>
        </div>
    );
};