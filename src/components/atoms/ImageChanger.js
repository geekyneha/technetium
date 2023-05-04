import axios from "axios";
import { useEffect, useState } from "react"

export default function ImageChanger(){

    const [image , setImage]=useState("")
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((response)=>{
            console.log(response)
            setImage(response.data.message)
        })
        
    },[])

    

    return (
        <>
        <img src={image} alt="Dog" height={200} width={200}/>
        
        </>
    )

}