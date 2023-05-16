import React from 'react'
import Navbar from '../../molecules/nav'
import styles from './login.module.css'

function Login() {
  return (
    <>
     <Navbar/>
    <div className={styles.page}>Login</div>
    </>
  )
}

export default Login