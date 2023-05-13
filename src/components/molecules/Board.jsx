import styles from './Board.module.css'
import ToDo from './ToDo'
export default function Board(){
    return(
       <div className={styles.board}>
        <ToDo />
       </div>
    )
}