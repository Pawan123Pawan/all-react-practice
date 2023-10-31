import React,{useState} from "react"; 

console.log("I am in StatesBasics.js")


let a = 10

const StatesBasics = () => {
    
    const [count, setCount] = useState(10)


    
    function increaseCount(){
         setCount(count+1) 
    }
   
    console.log("I am dancing")
   
   
   

    console.log(a)

   function increase(){
       a = a + 1
       console.log(a)
   }


    return(
        <div>
              <h1> a: {a} </h1>
              <button onClick={increase}>Increase</button>

              <h1> count: {count} </h1>

              <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default StatesBasics;



// use state variables


// const [count , updateCount] = useState(100)

    // count is a variable 
    // updateCount is a function that will update the count variable 

    // 100 inside useState is the initial value of count variable


    // let x = useState(100)

    // x = [100, func]

  //   let [c,d] = x

  

    // let [c,d] = useState(100)

    //   console.log(c)
    //   console.log(d)