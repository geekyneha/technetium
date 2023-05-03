import './GenerateOtp.css'
import { useState } from 'react';

export default function GenerateOtp(){
    const [mobile , setMobile] = useState("");
    const [error , setError] = useState(null)
    const [success , setSuccess] = useState(null)

    function handleClick(){
        const isValid = /^[1-9]\d{9}$/;
        
        if(!isValid.test(mobile)){
            setError("Invalid mobile number")
            return ;
            

        }
      

        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                mobile: mobile,
            }),

        

    }).then((response)=>{      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
      // console.log(response.json());

        
    })
    .then((data) => {
    
        if (data.txnId) {
          setSuccess("OTP sent successfully");
          setMobile("");
        } 
        else {
          setError("Failed to send OTP");
        }
      })
      .catch((error) => {
        console.error("Error fetching OTP: ", error);
        setError("Failed to send OTP");
      });

    }
    
    
    
    return(
        <>
        <span className='container'>
            <h3 >
                Generate OTP
            </h3>
        <input type="number"
            pattern="[1-9]{1}[0-9]{9}"  id="mobileNumber"    required value={mobile} onChange={(event)=>setMobile(event.target.value) }/>
        <button onClick={handleClick}>Get OTP</button>

        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        
        </span>
        </>

    )
}