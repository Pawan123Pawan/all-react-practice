import React from "react"; 

const Section = ({name, stream, url}) => {
    return(
        <div>
            <hr/>
            <h1>{name}</h1>
            <h3>{stream}</h3>
            <img  className="imageStudent" src={url} alt="student image"></img>
        </div>
    )
}

export default Section;