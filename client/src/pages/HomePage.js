import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results'; // Import the Results component
import '../App.css';

function HomePage() {
    const [searchResults, setSearchResults] = useState([]); // State to hold search results

    return (
        <>
            <div className="background-container">
                <div className="content-container">
                    <SearchBar setSearchResults={setSearchResults} /> {/* Pass setSearchResults to SearchBar */}
                    <Results data={searchResults} /> {/* Display search results */}
                </div>
            </div>
        </>
    );
}

export default HomePage;


