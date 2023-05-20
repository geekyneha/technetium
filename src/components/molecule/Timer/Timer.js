import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

function Timer({ timeLeft, setTimeLeft, optionClicked, currentQues }) {
  var timer;
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(
        () => setTimeLeft((prevTime) => prevTime - 1),
        1000
      );

      return () => clearInterval(timer);
    }
  }, [timeLeft, optionClicked]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(120);
    }
  }, []);

  // useEffect(()=>{
  //   if(currentQues===9){
  //     setTimeLeft(0)
  //   }

  // },[timeLeft])

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  return (
    <div className={styles.timer}>
      {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
    </div>
  );
}

export default Timer;
