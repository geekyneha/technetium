import React, { useEffect, useRef } from "react";
import './ImageChanger.css'


export default function ImageChanger() {
  const imageRef = useRef(null);
  const images = [
    "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8369590/pexels-photo-8369590.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2533352/pexels-photo-2533352.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://gratisography.com/wp-content/uploads/2023/02/gratisography-colorful-kittenfree-stock-photo-800x525.jpg",
    "https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/516/hands-woman-photography-children.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/516/hands-woman-photography-children.jpg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageRef.current.src = images[randomIndex];
  };

  useEffect(() => {
    imageRef.current.addEventListener("click", handleClick);
    return () => {
      imageRef.current.removeEventListener("click", handleClick);
    };
},[]);

  return (
    <div>
      <h1>Change Image</h1>
      <img ref={imageRef} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="images" height="200" width="400" />
      <br />
      <button  onClick={handleClick}>Change Image</button>
    </div>
  );
}
