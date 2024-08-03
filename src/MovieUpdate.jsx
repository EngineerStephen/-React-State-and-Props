import React, { useState } from "react";

const MovieUpdate = (props) => { 
    const [movie, setMovie] = useState(props.initialMovie);
    const [producer, setProducer] = useState(props.initialProducer);
    const [additionalDetails, setAdditionalDetails] = useState(props.initialAdditionalDetails);

    const changeMovie = () => {
        setMovie("New Movie");
    };
    
    const changeProducer = () => {
        setProducer("New Producer");
    };

    const changeDetails = () => {
        setAdditionalDetails("New Movie Details");
    };

    return(
        <div>
            <h1>Movie Update</h1>
            <h2>Favorite Movie: {movie}</h2>
            <button onClick={changeMovie}>Update Movie</button>
            <h2>Favorite Producer: {producer}</h2>
            <button onClick={changeProducer}>Update Producer</button>
            <h2>Favorite Movie Details: {additionalDetails}</h2>
            <button onClick={changeDetails}>Update Movie Details</button>
        </div>
    )
}

export default MovieUpdate;