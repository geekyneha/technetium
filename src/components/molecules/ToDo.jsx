import Button from "../atoms/button";
import { useState } from "react";
import styles from "./ToDo.module.css";
export default function ToDo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [changeStyle, setChangeStyle] = useState(false);
  const [count, setCount] = useState(0);

  function addActivity() {
    // setListData([...listData,activity]);
    // console.log(listData)
    setCount(count + 1);
    setChangeStyle(false);
    setListData((listData) => {
      const updataedList = [...listData, activity];
      console.log(updataedList);

      setActivity(" ");
      return updataedList;
    });
  }

  function handleComplete() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }

    setChangeStyle(true);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13 && activity !== "") {
      addActivity();
    }
  }

  function handleRemove(i) {
    const updataedListData = listData.filter((ele, id) => {
      return i !== id;
    });
    setListData(updataedListData);
  }

  return (
    <div className={styles.container}>
      <h1>Pending task ({count})</h1>

      {listData != [] &&
        listData.map((data, i) => {
          return (
            <>
              <div key={i} className={styles.gap}>
                <div className={styles.task}>
                  <div
                    className={`${styles.activity} ${
                      changeStyle === true ? styles.deco : styles.remdeco
                    } }`}
                  >
                    {data}
                  </div>
                  <div className={styles.btnd}>
                    <button
                      className={styles.complete}
                      onClick={handleComplete}
                    >
                      complete
                    </button>{" "}
                    <button
                      onClick={() => handleRemove(i)}
                      className={styles.rem}
                    >
                      x
                    </button>{" "}
                  </div>
                </div>
              </div>
            </>
          );
        })}

      <input
        className={styles.inp}
        type="text"
        placeholder="add a new task"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* <Button onClick={addActivity} /> */}
    </div>
  );
}
