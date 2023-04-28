import React, { useState } from "react";
import SumbitBtn from "../atoms/button";
import './GuessingGame.css'
export default function GussingGame(){

    const [randomNumber,setRandomNumber]=useState(Math.floor(Math.random()*10 + 1));
    const [guess,setGuess]=useState(' ');
    const [message , setMessage]=useState(' ');
    const [count, setCount]=useState(1);
    const [attempt , setAttempt]=useState (' ')

    function handleInput(event){

        setGuess(event.target.value);

   }
  
 

   function handleSubmit(){
    setCount( count +
          1)

    console.log(guess)
    console.log(randomNumber)
 if(guess == randomNumber){
    
        setMessage("You've guessed it!");
        setAttempt("Way to go, " + count + " attempts!");

        setRandomNumber((Math.floor(Math.random()*10 + 1)))
        setGuess(" ");

        setAttempt(' ')
        setCount(1);


    }
    else if(guess< randomNumber){
        setMessage("Keep guesssing!, but try higher this time!");
    }
    else if(guess > randomNumber){
        setMessage("Keep guesssing!, but try lower this time!");
    }
   

   }
    
    return(
        
            <div className="card">
                <h4>
                Guess the mystery number! hint : It's between 1 -10 !
                </h4>
            <input type = "number" className="input" placeholder="Make a guess" onChange={handleInput}/>
            <SumbitBtn onClick={handleSubmit}/>
            <p>{message}</p>
            <p>{attempt}</p>
            


        </div>
     
    );


}