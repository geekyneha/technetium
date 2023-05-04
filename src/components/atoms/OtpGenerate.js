import './OtpGenerate.css'
import axios from "axios";
import { useEffect, useState } from 'react'

export default function OtpGenerate(){

    const [number, setNumber] = useState("")
    const [error, setError] = useState(null)
    const [otpSent, setOtpSent] = useState(false);

    function handleClick(e) {
        const check = validate(number)
        const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"

        axios.post(url,{
            mobile: number
        })
        .then((response) => {
            console.log(response)
            setOtpSent(true)
        })
        
        .catch((error) => {
            console.error(error);
            setOtpSent(false);
        })
    }

    function validate(number){
        const isValid = /^[6-9]\d{9}$/;
        if(!isValid.test(number)){
            setError("Please enter a valid number")
            return 
        }
    
    }
    
    return (
        <span className='container'>
            <h3>Generate OTP</h3>
            <input type="text" placeholder="Enter your Number" onChange={(event) => setNumber(event.target.value)} />
            <span className='error'>{error}</span><br />
            <button onClick={handleClick}>Get OTP</button>
            {otpSent && <p className='success'>OTP sent successfully!</p>}
        </span>
    )
}
