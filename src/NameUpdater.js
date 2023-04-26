import { useState } from "react";
import './NameUpdater.css';

function NameUpdater(){
 
    const [name, setName]=useState(''); 
    const [headingText,setHeading]=useState('')


    
    function handleChange(event){
        setName(event.target.value);
        

    }
    function handleClick(){
        setHeading(name);
       

      
    }
    return (
        <div className="container">
            <h1 className="heading">The name is : {headingText}</h1>
            <input placeholder="enter name" className="name" onChange={handleChange} value={name}/>
            <button className="button" onClick={handleClick} > Submit </button>
        </div>
    )

}
export default NameUpdater;