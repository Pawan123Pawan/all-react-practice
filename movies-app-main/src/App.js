import React,{useState} from "react";
import MovieDisplay from "./Components/MovieDisplay";

import MovieDetails from "./Components/MovieDetails";

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    console.log(selectedMovie);


    return (
        <div>
             <MovieDisplay 
               updateSelectedMovie={setSelectedMovie}
             />



             <MovieDetails clickedMovie={selectedMovie} />
            
        </div>
    );
}

export default App;



// function hello(){
//     console.log("hello");
// }

// let hii = hello 

// hii()