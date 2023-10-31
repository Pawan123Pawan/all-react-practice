import React,{useState, useEffect} from "react"; 


const Effect1 = () =>{
    const [gold,setGold] = useState(0);
    const [silver,setSilver] = useState(0);
    const [bronze,setBronze] = useState(0);


    

    useEffect(()=>{
        console.log("rendering")  
        // document.title = `Gold:${gold} Silver:${silver}`;
        // document.write = `${gold} ${silver}`;

    },[gold,silver])

    // [] => run only once 
    // [gold] => 1st time will run, then run when gold changes 
    // [gold,silver] => 1st time will run, then run when gold or silver changes


    return(
        <div>
            {/* display gold, silver broze in one line */}
            <h1>Gold:{gold} Silver:{silver} Bronze:{bronze}</h1>
            {/* create 3 buttons for each medal */}
            <button onClick={()=>setGold(gold+1)}>Gold</button>
            <button onClick={()=>setSilver(silver+1)}>Silver</button>
            <button onClick={()=>setBronze(bronze+1)}>Bronze</button>
        </div>
    )

}

export default Effect1;