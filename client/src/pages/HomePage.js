import React, { useState } from 'react';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement your search logic or redirection here
        console.log(`Searching for: ${searchTerm}`);
    };


    return (
        <div className="background-container">
        <div className="content-container">
            <div className="search-container">
                <h1>Welcome to ScreenScene</h1>
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
            </div>
        </div>
    );

}

export default HomePage;
