import React from "react";
import bollywood from "../images/bollywood.webp";

const MovieDetails = ({clickedMovie}) => {

    return(
        <div>
             {
                 clickedMovie!=null && (
                    <div>
                        <img style={{width:"300px"}} src={bollywood} alt={clickedMovie.title} />
                        <h1>{clickedMovie.title}</h1>
                        <p>{clickedMovie.genre}</p>
                        <p>{clickedMovie.director}</p>
                        <p>{clickedMovie.releaseYear}</p>
                    </div>
                 )
            }
        </div>
    )
}

export default MovieDetails;