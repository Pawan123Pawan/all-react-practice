import React from "react"; 

const Section = ({x, y}) => {
    return(
        <div>
            <hr/>
            <h1>{x}</h1>
            <p>{y}</p>
        </div>
    )
}

export default Section;