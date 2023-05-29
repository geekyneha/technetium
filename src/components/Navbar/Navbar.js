import React from 'react'
import styles from './navbar.module.css'
import { Link,Outlet } from 'react-router-dom'
import Home from '../pages/Home'


function Navbar() {
  return (
         <>
         <div className={styles.header}>
            <div>Logo</div>
            <div className={styles.Navbar}>
                 <Link to='/home' className={styles.nav}>Home</Link>
                 <Link to='/favourite' className={styles.nav}>favourite</Link>
               
            </div>
            
         </div>
         <div>
                <Outlet />
            </div>
         </>
  )
}

export default Navbar