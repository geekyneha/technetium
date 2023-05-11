import Card from "../atoms/Card"
import { mentorDetails } from "../../const"
import styles from'./ScrollBar.module.css'


export default function Scroll(){

    
      
  return (
    <div className={styles.wrapper}>
        
        {
            mentorDetails.map(data=>
                <Card key={data.id} mentorDetails={data}/>)
        }
     

    </div>
  )
}
