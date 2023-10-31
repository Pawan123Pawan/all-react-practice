import React, { useState } from "react";

function hello() {
  console.log("hello");
  //   return 1!+2!+3!+4!+5!+6!+7!+8!+9!+10! ...LazyInitilization...1000!
}

const LazyInitilization = () => {
  const [count, setCount] = useState(() => {
    console.log("hello");
    return 0;
  });

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  );
};

export default LazyInitilization;

// for(let i = 0; i < 10; i++){
//       console.log(i)
// }
