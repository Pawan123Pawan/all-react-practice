import React,{useState} from "react";


const AsynStates = () => {
   const [count, setCount] = useState(0)

   function increase1(){
        setCount(count+2) 
        setCount(count+3) 
        setCount(count+2) 
        setCount(count+3)
        setCount(count+2) 
        setCount(count+3)
        setCount(count+4) 
        // setCount(count+3)
        console.log(count) 
   }

   function increase2(){
    setCount(prevCount =>prevCount+1)
    setCount(prevCount =>prevCount+1)
    
   }


   function increase3(){
    setCount(()=>count+1) 
    setCount(()=>count+1)
   }






    return(
        <div>
            <h1> {count} </h1>
            <button onClick={increase1}> Increment </button>
        </div>
    )
}

export default AsynStates;





// hello(3+4, ()=>3+4)