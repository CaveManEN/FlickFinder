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
        <>
            <header className="header">
                <div className="logo">
                </div>
                <nav className="navbar">
                    <a href="/movies">View Movies</a>
                    <a href="/login">Login</a>
                    
                </nav>
            </header>
            <div className="background-container">
                <div className="content-container">
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
                </div>
            </div>
        </>
    );
    

}

export default HomePage;
