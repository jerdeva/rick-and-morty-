import { useState } from "react"

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
            <button onClick={handleSort}>Sort by name</button>
        </div>
    );
};