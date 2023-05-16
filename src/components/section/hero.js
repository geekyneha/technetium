import style from './hero.module.css'
import {FaPlay} from 'react-icons/fa'
export default function Hero(){
    return (
        <div className={style.container}>
        <div className={style.content} >

        <h1>Be There</h1>
        <p>Deliver brilliant messeges in the moments that truely defines your brand</p>
        <button>See how <FaPlay /></button>
        

       </div>
       <div className={style.img}>
        <img src="https://media.gettyimages.com/id/821490220/photo/young-woman-using-smart-phone-at-night-on-street.jpg?s=1024x1024&w=gi&k=20&c=rNXkdZRQcFE5orAh0gEXTtSQfFYws_l2i2BQ8kn7vL0=" alt="unavailable"/>
       </div>
       </div>

      
    )
}