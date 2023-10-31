
import React from "react"; 
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
// import "./style.css"
// import sectionData from "./data/sectionData";
import studentData from "./data/students";
import image from "./images/vite.svg";



const App = () => {



     return(
        <div>
            <img src={image} alt="dsd" />
            <Navbar />
            <About />

          {
             studentData.map(value => (
                  <Section 
                     name={value.name}
                     stream={value.stream}
                     url ={value.image}
                     message ="skdsld-hello"
                  />
             ))

          }

        </div>
     )
}

export default App;


// ifelse => ternory operator 

// loops => higher order function => map, filter, reduce