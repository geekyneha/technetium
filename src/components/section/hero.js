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
        <img src="https://lh3.googleusercontent.com/M85HTGkvDEPxh9pntGCx-fu3B7qK9CfYRYuCUXjg1tQxTowFq8X8wyM7Y7Y3VbX9R8VCuplU4mYp-X50FpUgKFRMS8HWz0i0IkHD0XE" />
       </div>
       </div>

      
    )
}