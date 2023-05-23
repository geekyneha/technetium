import React, { useState } from 'react'
import styles from "./search.module.css"

function Search() {
  const [input, setInput] = useState("");
  const [disInput, setDisInput] = useState("");

  const arr = ["Neha khan", "Neha Khanam", "Nehaaa Nea ", "Neon ", "New"]

  function showInput(e) {
    const userInput = e.target.value
    setInput(userInput)

    if (arr.includes(userInput)) {
      setDisInput(userInput)
    }
    else {
      setDisInput("");
    }


  }
  function getFilteredResults() {
    return arr.filter((match) => match.includes(input))
  }


  return (
    <>
      <input className={styles.input} value={input} onChange={(e) => showInput(e)} />
      <div>{input}</div>
      <div>
        <div>
          {input && getFilteredResults().map((match) => (
            <div key={match}>{match}</div>
          ))}
        </div>
      </div>

    </>

  )
}

export default Search