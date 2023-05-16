import React from 'react'
import Navbar from '../../molecules/nav'
import styles from './about.module.css'

const About = () => {
  return (
    <>
    <Navbar/>
   <div className={styles.page}>About us</div>
   </>
  )
}

export default About