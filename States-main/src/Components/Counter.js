
import React,{useState} from "react";


const Counter = () => {
   const [a, setA] = useState(0) // ignore reload of this line
   const [b, setB] = useState(0) // ignore reload of this line

   function increaseA(){
       setA(a+1)
       setB(b-1)
       winner();
   }
   function increaseB(){
       setB(b+1)
       setA(a-1)
       winner();
   }

   function winner(){
        if(a === 10){
            alert("A has winner......")
            reset()
        }
        else if(b === 10){
            alert("B has winner......")
            reset();
        }
   }
    
   function reset(){
        setA(0);
        setB(0);
   }


    return(
        <div>
            <h1>Counter App</h1>  
            <h2>Count-a:{a }</h2>
            <h2>Count-b:{b }</h2>
            <button onClick={increaseA}>IncreseA</button><br></br>
            <button onClick={increaseB}>IncreseB</button>
            {/* <button onClick={()=>setA(a-1)}>Decrease</button>  */}
            <button onClick={()=>{setA(0);setB(0)}}>Reset</button>
        </div>
    )
}

export default Counter;