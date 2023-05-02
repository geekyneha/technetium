import { useEffect, useState } from 'react'
import './GetImage.css'

export default function GetImage(){
  const [image, setImage] = useState("")

  async function getImage(){
    try{
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json();
      setImage(data.message)
    } catch(error){
      console.log('Error:', error)
    }
  }

  useEffect(() => {
    getImage()
  }, [])

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      getImage()
    })
  }, [])

  return(
    <>
      <img src={image} alt="image" height={250} width={250}/>
    </>
  )
}
