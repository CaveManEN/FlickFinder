// Results component
// destructure data from props object
const Results = ({data}) => {

    let dataContainer = null 
    
    if (data?.length > 0) {
        console.log('Data Length: ', data.length)
        console.log('Data: ', data);
        dataContainer = (
            <div className='results-container'>
                {
                    data.map((result) => (
                        // Only render card with image containing api imageUrl if the results contains it
                        result.i ? (
                        <div key={result.id} className='result-card'>
                            <img
                                className='card-img'
                                src={result.i?.imageUrl} // conditionally render image
                                width="100"
                                height="150"
                                    alt='Image of movie, show, video, or actor'
                                ></img>
                                <div className='card-text'>
                                    <h3>{result.l}</h3>
                                    <p>{result.s}</p>
                                    <p>{result.y}</p>
                                    <p>{result.qid}</p>
                                </div>
                        </div>
                        ) : (
                            // Render card with image containing placeholder URL
                            <div key={result.id} className='result-card'>
                            <img
                                className='card-img'
                                // place holder image URL
                                src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' 
                                width="100"
                                height="150"
                                    alt='Placeholder for missing image'
                                ></img>
                                <div className='card-text'>
                                    <h3>{result.l}</h3>
                                    <p>{result.s}</p>
                                    <p>{result.y}</p>
                                    <p>{result.qid}</p>
                                </div>
                        </div>
                        )
                    ))}
            </div>
        );
    } 

    return (
        <>
            {dataContainer}
        </>
    )
}

export default Results;