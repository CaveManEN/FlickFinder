import { Link } from 'react-router-dom';
import AppContext from '../utils/AppContext'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const ResultCard = ({imgPlaceHolder, result}) => {
    const navigate = useNavigate();
    let movieId;
    const {data, setData} = useContext(AppContext);
    // const navigate = useNavigate();
    console.log('ResultCardData', data)

    const handleClick = async (e) => {
        movieId = e.currentTarget.getAttribute('data-id')
        console.log('Movie id: ', movieId);
        // using await makes sure the data is fetched and global state us updating before navigating to the /results/${result.id} end point
        await fetchData();
        navigate(`/results/${result.id}`)
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/results/movie/${movieId}`);
            const jsonData = await response.json();

            // update currentMovie
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const card = result.titlePosterImageModel ? (
        <div
            key={result.id} 
            className='result-card elasticPopUpAnimation'
            onClick={handleClick}
            data-id={result.id}
        >
            <img
                className='card-img'
                src={result.titlePosterImageModel.url} // conditionally render image
                width="100"
                height="150"
                alt='Image of movie, show, video, or actor'
            />
            <div className='card-text'>
                <h3>{result.titleNameText}</h3>
                <div>{result.topCredits.map((actor, index) => <p key={index}>{actor}</p>)}</div>
                <p>{result.titleReleaseText}</p>
            </div>
        </div>

    ) : (

        // <div key={data.id} className='result-card'>
            <Link
                to={`/results/${result.id}`}
                key={result.id} 
                className='result-card elasticPopUpAnimation'
                onClick={handleClick}
                data-id={result.id}
            >
                <img
                    className='card-img'
                    src={imgPlaceHolder} // conditionally render image
                    width="100"
                    height="150"
                    alt='Placeholder for missing image'
                ></img>
                <div className='card-text'>
                    <h3>{result.titleNameText}</h3>
                    <div>{result.topCredits.map((actor) => <p>{actor}</p>)}</div>
                    <p>{result.titleReleaseText}</p>
                </div>
            </Link>
        // </div>
        
    )
    return (
        card
    )
}

export default ResultCard;

