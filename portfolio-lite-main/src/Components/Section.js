import React from "react"; 

const Section = ({name, stream, url, message}) => {
    return(
        <div>
            <hr/>
            <h1>{message}</h1>
            <h1>{name}</h1>
            <h3>{stream}</h3>
            <img  className="imageStudent" src={url} alt="student image"></img>
        </div>
    )
}

export default Section;