
import React,{useState} from "react"; 

import indianMovies from "../data/indianMovies";


const MovieDisplay = ({updateSelectedMovie}) => {
    

    
    

    return(
        <div>
              { 
                  indianMovies.map((movie)=>(
                    <div onClick={()=>updateSelectedMovie(movie)}>
                          <p>{movie.title}</p>
                    </div>
                  ))
               }
              
        </div>
    )
}

export default MovieDisplay;