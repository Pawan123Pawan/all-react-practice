
import React,{useState} from "react";

const BasicForm = () => {

    let [name, setName] = useState("")
    let [btnClick, setBtnClick] = useState(false)

    // console.log("name",name)

    function updateName(e){

        console.log(e.target)

        setName(e.target.value)
        
    }

    function handleSubmit(){

        setBtnClick(true)
    }

    return(
        <div>
             <input type="text" placeholder="Enter your name" 
              onChange = {updateName} 
             />

             <button onClick={handleSubmit}> Submit </button>

             {/* {
                btnClick == true && <p> {name} </p>
             } */}

             {
                btnClick==true?  <p> {name} </p> : ""
             }
        </div>
    )
}

export default BasicForm;


// reloading and rerendering