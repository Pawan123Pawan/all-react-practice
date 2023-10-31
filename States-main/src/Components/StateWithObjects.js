
import React,{useState} from "react";

const StateWithObjects = () => {

    const [coins, setCoins] = useState({gold: 0, silver: 0, bronze: 0})

    console.log("coins",coins) // {gold:0, silver:0, bronze:0}


    function incGold(){
        setCoins({...coins,gold:coins.gold+1})
    }


    return(
        <div>
            
            <h1>Gold:{coins.gold} Silver:{coins.silver} Bronze:{coins.bronze}</h1>

            <button onClick={incGold}>Gold</button>
            <button onClick={()=>setCoins({...coins, silver: coins.silver+1})}>Silver</button>
            <button
            onClick={()=>setCoins({...coins, bronze: coins.bronze+1})}
            >Bronze</button>
        </div>
    )
    
}

export default StateWithObjects;



//a = {a:1, b:2, c:3}

// let t = {a:1, b:20, c:3} 

// a = t