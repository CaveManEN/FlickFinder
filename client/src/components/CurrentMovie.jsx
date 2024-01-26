import AppContext from '../utils/AppContext';
import { useContext, useEffect } from 'react';

const CurrentMovie = () => {

    const { data, setData } = useContext(AppContext);
    console.log('current movie data: ', data);

    // if(data.titleText.text) {
    //     const title = <h1>{data.titleText.text}</h1>
    // }

    // return <h1>{data.titleText.text}</h1>

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
                    />
                    <section className='trailer-container'>
                        {/* embedded movie trailer */}
                    </section>
                </section>
                <section className='card-info'>
                    <p>{data.plot.plotText.plainText}</p>
                    {/* data.directors */}
                    {/* Need to figure out how to go through nested array of objects */}
                    <p>DIRECTORS</p>
                    <p>WRITERS</p>
                    <p>CAST</p>
                </section>
            </div>
        </div>
    )

}

export default CurrentMovie;




    // return <h1>{data.titleText.text}</h1>

    // const { data } = useContext(AppContext);
    // console.log('Current Movie Data: ', data);
    // return (
    //     <div className='results-container'>
    //         <div>
    //             <header>
    //                 <h1>{data.originalTitleText.text}</h1>
    //                 <p>
    //                     <span>
    //                         {data.releaseYear.year} &#183; {data.certificate.rating} &#183; {data.runtime.displayableProperty.value.plainText}
    //                     </span>
    //                 </p>
    //             </header>
    //             <section>
    //                 <img
    //                     src={data.primaryImage.url}
    //                 />
    //                 {/* EMBEDDED TRAILER VIDEO */}
    //             </section>
    //             <p>{data.plot.plotText.plainText}</p>
    //             {/* data.directors */}
    //             {/* Need to figure out how to go through nested array of objects */}
    //             <p>DIRECTORS</p>
    //             <p>WRITERS</p>
    //             <p>CAST</p>

    //         </div>
    //     </div>
    // )