import React from 'react'
import Navbar from '../../molecules/nav'
import styles from './Videos.module.css';
const Vidoes = () => {
  return (
    <>
     <Navbar/>
    <div className={styles.page}>Here You can Watch Videos</div>
    </>
  )
}

export default Vidoes