import React from "react";
import { useSelector } from "react-redux";


function Greeting() {
   let greetings = useSelector((state)=> state.greetings.greetings);
   console.log(greetings)


   return <h1>
      { greetings.length === 0 ? <p>loading</p> : <p>{greetings.greeting}</p>}
      </h1>;
}

export default Greeting;