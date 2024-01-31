import { Link } from 'react-router-dom';
import AppContext from '../utils/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultCard = ({ imgPlaceHolder, result }) => {
    const navigate = useNavigate();
    const { setData } = useContext(AppContext);

    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await fetch(`http://localhost:3001/results/movie/${movieId}`);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.log('Error fetching movie details:', error);
        }
    }

    const handleMovieSelect = async () => {
        const movieDetails = await fetchMovieDetails(result.id);
        setData(movieDetails);
        navigate(`/movie/${result.id}`);
    }

    // Extracting data from the result object
    const movieTitle = result.l; // Title of the movie
    const movieImageUrl = result.i?.imageUrl || imgPlaceHolder; // Movie image URL with fallback to placeholder
    const movieDescription = result.s; // Additional description, if available

    return (
        <div
            key={result.id}
            className='result-card elasticPopUpAnimation'
            onClick={handleMovieSelect}
            data-id={result.id}
        >
            <img
                className='card-img'
                src={movieImageUrl}
                width="100"
                height="150"
                alt={`Image of ${movieTitle}`}
            />
            <div className='card-text'>
                <h3>{movieTitle}</h3>
                <p>{movieDescription}</p>
                {/* Add more details here if available */}
            </div>
        </div>
    );
}

export default ResultCard;




