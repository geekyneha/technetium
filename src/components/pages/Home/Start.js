import React from 'react'
import styles from './Start.module.css'
import { useNavigate } from 'react-router-dom'


function Start() {
  const nevigate = useNavigate();
  return (
    <div className={styles.container}> <button onClick={handleStart} className={styles.button}>Start Quiz </button></div>

  )
  function handleStart() {
    nevigate('Quiz')
  }
}

export default Start