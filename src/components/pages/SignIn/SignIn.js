import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './signIn.module.css';

const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (email.current.value && password.current.value) {
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('signUp', email.current.value);

      if(localStorage.getItem("signUp")){
        navigate('/Home');
      }
      else{
        navigate('/')
      }
      
    }
  };

  return (
    <form onClick={handleClick}>
      <div className={styles.container}>
        <input className={styles.input} placeholder="Enter email" type="email" ref={email} />
        <input className={styles.input} type="password" ref={password} />
        <button className={styles.button} type="submit">
          SignIn
        </button>
      </div>
    </form>
  );
};

export default SignIn;
