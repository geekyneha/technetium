import React, { useState } from "react";
import styles from "./QuizQues.module.css";
import Header from "./Header/Header";
import Timer from "../../molecule/Timer/Timer";

function QuizQues() {
  //properties
  const [showFinalReasult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);

  const questions = [
    {
      text: "What is the correct command to create a new React project?",
      options: [
        { id: 0, text: "npm install create-react-app", isCorrect: false },
        { id: 1, text: "npx install create-react-app -g", isCorrect: false },
        { id: 2, text: "install - l create-react-app", isCorrect: false },
        { id: 3, text: "npx create-react-app appname", isCorrect: true },
      ],
    },
    {
      text: "What is ReactJS?",
      options: [
        {
          id: 0,
          text: "A libraray for building user interfaces",
          isCorrect: true,
        },
        { id: 1, text: "server-side framework", isCorrect: false },
        { id: 2, text: "both", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
      text: "What is the default port number in which the application run ?",
      options: [
        { id: 0, text: "3000", isCorrect: true },
        { id: 1, text: "3090", isCorrect: false },
        { id: 2, text: "8000", isCorrect: false },
        { id: 3, text: "5010", isCorrect: false },
      ],
    },
    {
      text: "Which of the following valid component return type of React ?",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "1", isCorrect: true },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a way to handle data in React.js ?",
      options: [
        { id: 0, text: "Services & Components", isCorrect: false },
        { id: 1, text: "State & props", isCorrect: true },
        { id: 2, text: "State & Services", isCorrect: false },
        { id: 3, text: "State & Components", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is must for the API in React.js ?",
      options: [
        { id: 0, text: "SetinitialComponent", isCorrect: false },
        { id: 1, text: "Component", isCorrect: false },
        { id: 2, text: "render", isCorrect: true },
        { id: 3, text: "All of the above", isCorrect: false },
      ],
    },
    {
      text: "Everything in React is a ?",
      options: [
        { id: 0, text: "Class", isCorrect: false },
        { id: 1, text: "Component", isCorrect: true },
        { id: 2, text: "Module", isCorrect: false },
        { id: 3, text: "Package", isCorrect: false },
      ],
    },
    {
      text: "What does the webpack command do?",
      options: [
        { id: 0, text: "A module bundler", isCorrect: true },
        {
          id: 1,
          text: "Runs react local development server.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Transpiles all the Javascript down into one file",
          isCorrect: false,
        },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is true regarding Babel?",
      options: [
        { id: 0, text: "transpiler", isCorrect: false },
        { id: 1, text: "Compiler", isCorrect: false },
        { id: 2, text: "none of the above", isCorrect: false },
        { id: 3, text: "both a & b", isCorrect: true },
      ],
    },
    {
      text: "In React.js, how we can pass the data from one component to another in React.js?",
      options: [
        { id: 0, text: "props", isCorrect: true },
        { id: 1, text: "propType", isCorrect: false },
        { id: 2, text: "states", isCorrect: false },
        { id: 3, text: "states & props", isCorrect: false },
      ],
    },
  ];

  //function

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQues + 1 < questions.length) {
      setCurrentQues(currentQues + 1);
    } else {
      setFinalResult(true);
    }
  };
  const showScore = () => {
    if (currentQues === 9) {
      setCurrentQues(currentQues + 1);
      setTimeLeft(0);
    }
  };

  function restartQuiz() {
    setScore(0);
    setCurrentQues(0);
    setTimeLeft(600);
    setFinalResult(false);
  }

  return (
    <div className={styles.quiz}>
      <Header />

      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        currentQues={currentQues}
      />

      {timeLeft !== 0 && currentQues !== 10 && (
        <div className={styles.questionCard}>
          
          <h2>
            {currentQues + 1} out of {questions.length}
          </h2>
          <h3 className="(styles.questionText">
            Q{currentQues + 1}. {questions[currentQues].text}
          </h3>
          <ul>
            {questions[currentQues].options.map((option) => {
              return (
                <li
                  className={styles.opt}
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}{" "}
                </li>
              );
            })}
          </ul>
          <button onClick={showScore}>Submit</button>
        </div>
      )}
      {(timeLeft === 0 || currentQues === 11) && (
        <div className={styles.score}>
          <h1>Your score</h1>
          <h2>
            {score * 2} out of {questions.length * 2} is correct - (
            {score * 2 >= 12
              ? "Congratulations You've passed the test"
              : "Oops ! You falied. Try again"}
            )
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default QuizQues;
