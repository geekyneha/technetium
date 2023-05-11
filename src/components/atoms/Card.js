import styles from './Card.module.css'
import { mentorDetails } from '../../const'

export default function Card({mentorDetails}){
    
    return (

         <div>          

                  
                <div className={styles.card}>
                    
      <img src={mentorDetails.image} alt="no" />
      <p className={styles.name}>{mentorDetails.name}</p>
      <p className={styles.prof}>{mentorDetails.qualification}</p>
      <p className={styles.exp}>{mentorDetails.experience}</p>
    </div>
              </div>
                
            
    
    
    
  
    )
}