import React from 'react'
import {useRef} from 'react'
import styles from './signIn.module.css'

const SignIn = () => {
    const email=useRef();
    const password= useRef();
  return (
    <>
    <form >
        <div className={styles.container}> 
        <input className={styles.input} placeholder='enter email' type='email'/>
        <input className={styles.input} type='password'/>
        <button className={styles.button} type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default SignIn