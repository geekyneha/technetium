import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './search.module.css';

function Search() {
  const [input, setInput] = useState('');
  const [disInput, setDisInput] = useState('');
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get('http://cdn-api.co-vin.in/api/v2/admin/location/states')
      .then((response) => {
        const stateNames = response.data.states.map((state) => state.state_name);
        setStates(stateNames);
      })
      .catch((error) => {
        console.error('Error retrieving states:', error);
      });
  }, []);

  function showInput(e) {
    const userInput = e.target.value;
    setInput(userInput);

    if (states.includes(userInput)) {
      setDisInput(userInput);
    } else {
      setDisInput('');
    }
  }

  function getFilteredResults() {
    return states.filter((state) => state.includes(input));
  }

  return (
    <>
      <input className={styles.input} value={input} onChange={(e) => showInput(e)} />
      
      <div>
        <div className={styles.box} >
        <p className={styles.auto}>{input}</p>
          {input && getFilteredResults().map((state) => (
            <p className={styles.auto} key={state}>{state}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
