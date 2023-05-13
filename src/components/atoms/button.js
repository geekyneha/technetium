import { Fragment } from "react";
import styles from "./button.module.css";
export default function Button({ onClick }) {
  return (
    <Fragment>
      <button className={styles.button} onClick={onClick}>
        Add Task
      </button>
    </Fragment>
  );
}
