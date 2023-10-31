import React,{useState} from "react";
import bollywood from "./images/bollywood.webp";


const indianMovies = [
    {
      title: "Sholay",
      releaseYear: 1975,
      genre: "Action/Adventure",
      director: "Ramesh Sippy",
      imageUrl: "placeholderImage1.jpg"
    },
    {
      title: "Dilwale Dulhania Le Jayenge",
      releaseYear: 1995,
      genre: "Romance/Drama",
      director: "Aditya Chopra",
      imageUrl: "placeholderImage2.jpg"
    },
    {
      title: "Lagaan",
      releaseYear: 2001,
      genre: "Drama/Sport",
      director: "Ashutosh Gowariker",
      imageUrl: "placeholderImage3.jpg"
    },
    {
      title: "3 Idiots",
      releaseYear: 2009,
      genre: "Drama/Comedy",
      director: "Rajkumar Hirani",
      imageUrl: "placeholderImage4.jpg"
    },
    {
      title: "Bahubali: The Beginning",
      releaseYear: 2015,
      genre: "Action/Fantasy",
      director: "S.S. Rajamouli",
      imageUrl: "placeholderImage5.jpg"
    },
    {
      title: "Queen",
      releaseYear: 2013,
      genre: "Drama/Comedy",
      director: "Vikas Bahl",
      imageUrl: "placeholderImage20.jpg"
    }
  ];
  



const App = () => {

    const [clickedMovie,setClickedMovie] = useState(null)

    console.log(clickedMovie)


    return (
        <div>
            <h1>Movies App</h1>
            {/* Title of all movies */} 

            { 
                  indianMovies.map((movie)=>(
                    <div onClick={ ()=>setClickedMovie(movie)}>
                          <p>{movie.title}</p>
                    </div>
                  ))
            }

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
    );
}

export default App;