import React, { useState, useContext } from 'react';
import AppContext from '../utils/AppContext';
// import useNavigate to change URL path after API fetch
import { useNavigate } from 'react-router-dom';
// import Results from '../components/Results';

// SearchBar component
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {setData} = useContext(AppContext);

    // store useNavigate function in a const to use later to change the URL path after API fetch
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchData() // call fetchData function to get API data
        console.log(`Searching for: ${searchTerm}`);
    };

    // Function to fetch data from the server's api fetched data using searchTerm
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/results/${searchTerm}`);
            const jsonData = await response.json();
            console.log(jsonData);

            // update data state value
            setData(jsonData);
            // change URL path to /results
            navigate('/results', { searchData: jsonData })

        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    return (
        <>
            <div>
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
                {/* <Results /> */}
            </div>
        </>
    );
}

export default SearchBar;