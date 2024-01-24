import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Results from '../components/Results';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
        await fetchData();
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/results/${searchTerm}`);
            const jsonData = await response.json();
            console.log(jsonData);
    
            setData(jsonData); // Update the state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="search-container">
                <h1>Welcome to Flick Finder</h1>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search for movies or TV shows"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            {/* Displaying results if available */}
            {data.length > 0 && <Results data={data} />}
        </>
    );
}

export default SearchBar;
