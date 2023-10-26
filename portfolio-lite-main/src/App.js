
import React from "react"; 
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
// import "./style.css"
import sectionData from "./data/sectionData";




const App = () => {



     return(
        <div>
            <Navbar />
            <About />

          {
             sectionData.map(value => (
                  <Section 
                     x={value.title}
                     y={value.des}
                  />
             ))

          }

        </div>
     )
}

export default App;


// ifelse => ternory operator 

// loops => higher order function => map, filter, reduce