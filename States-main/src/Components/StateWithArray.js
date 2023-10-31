import React,{useState} from "react"; 


const StateWithArray = () => {

 const [favourite, setFavourite] = useState(["apple", "mango", "banana"])
 const [fruits, setFruits] = useState("")

//  console.log(fruits)

   function updateFavorite(){
     //    console.log(event.target.value)
        setFavourite([...favourite, fruits])
   }

    return(
        <div>
               <h3 onClick={(e)=>(console.log(e))}>hello student</h3>
             <input  type="text" placeholder="Enter your favourite fruit"
              onChange={e => {setFruits(e.target.value); console.log(e.target); console.log(e)}}
             /> 
             <button onClick={updateFavorite}> Submit </button>

             {/* Display ur favourite fruits */}
             <div>
               {
                    // favourite.join(",")
                    favourite.map(val =><h1>{val}</h1>)
               }
             </div>
        </div>
    )
}

export default StateWithArray;




//    favourite.push(event.target.value)
     //    let arr = favourite 
     //    arr.push(event.target.value)
     //    setFavourite(arr)

     // let newArray = [...favourite]  
      
     //  let newArr = structuredClone(favourite) // node verseion > 17.2