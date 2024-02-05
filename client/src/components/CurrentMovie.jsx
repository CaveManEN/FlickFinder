import AppContext from '../utils/AppContext';
import { useContext, useEffect } from 'react';

const CurrentMovie = () => {

    const { data, setData } = useContext(AppContext);
    console.log('current movie data: ', data);

    return (
        <div className='results-container'>
            <div className='current-movie-card'>
                <header>
                    <h1>{data.originalTitleText.text}</h1>
                    <p>
                        <span>
                            {data.releaseYear.year} &#183; {data.certificate.rating} &#183; {data.runtime.displayableProperty.value.plainText}
                        </span>
                    </p>
                </header>
                <section className='card-content'>
                    <img
                        className='current-movie-img'
                        src={data.primaryImage.url}
                        alt={`Poster for ${data.originalTitleText.text}`}
                    />
                    <section className='trailer-container'>
                        {/* embedded movie trailer */}
                        {/* data.primaryVideo.edges[0].node.playbackURLs[0].url */}
                        <iframe
                            className='iframe'
                            title="IMDb Video"
                            width="560"
                            height="315"
                            src={data.primaryVideos.edges[0].node.playbackURLs[0].url}
                            autoPlay
                            allowFullScreen
                        ></iframe>
                    </section>
                </section>
                <section className='card-info'>
                    <p>{data.plot.plotText.plainText}</p>
                    {/* data.directors */}
                    {/* Need to figure out how to go through nested array of objects */}
                    <hr></hr>
                    <p>Director: {data.directors[0].credits[0].name.nameText.text}</p>
                    <p>Writers: {data.writers[0].credits.map((writer) => writer.name.nameText.text + ' \u00B7 ' )}</p>
                    <p>Stars: {data.principalCredits[2].credits.map((star) => star.name.nameText.text + ' \u00B7 ')}</p>
                </section>
            </div>
        </div>
    )

}

export default CurrentMovie;