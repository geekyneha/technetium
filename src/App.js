
import './App.css';
import ProductCard from './ProductCard';

function App() {
  
  const ProductOneDetails={
    productId : '1',
    productPic : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0iXbSWW2riIzv5T8rKuh8seHCtj_FspBxi7l5s2u0-fgUlLNU",
    productName : "SHOES",
    Brand : "Adidas",
    productDescription : "Hey Dude Men's Wally Linen Iron Size 11 | Mens Shoes | ",
    Price : "INR 4301",
    Rating : "⭐⭐⭐⭐ - Rating-4"
 
}

const ProductTwoDetails={
  productId : '2',
  productPic : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTessE3KZD9eAQWQ9x9o8dCMfaVWw63_bEeEBpc2yUKhV-wbPDZ",
  productName : "WATCH",
  Brand : "Curion",
  productDescription : "Hey Dude Men's Wally Linen Iron Size 11 | Mens Shoes | ",
  Price : "INR 1091",
  Rating : "⭐⭐⭐⭐ - Rating-4"

}
const ProductThreeDetails={
  productId : '3',
  productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTwxNF6kokdgOxUr4qDdxuSZBqpi6qQQT6UkwoZu1-_qSEGG7",
  productName : "T-SHIRT",
  Brand : "Adidas",
  productDescription : "Hey Dude Men's T-Shirt Size 11 | Mens Shirt | ",
  Price : "INR 2599",
  Rating : "⭐⭐⭐⭐ - Rating-4"

}
const ProductFourDetails={
  productId : '4',
  productPic : "https://images-cdn.ubuy.co.in/632d6589600efb4d0934b48b-lenovo-tab-m10-plus-3rd-gen-10-tablet.jpg",
  productName : "TABLET",
  Brand : "Adidas",
  productDescription : " Samsung Galaxy Size 26x26 | 11 pro tablet | ",
  Price : "INR 39999",
  Rating : "⭐⭐⭐⭐ - Rating-4"

}
const ProductFiveDetails={
  productId : '5',
  productPic : "https://images-cdn.ubuy.co.in/63fb3015a10d9d2dd457d8c3-onn-wireless-bluetooth-earphones-with.jpg",
  productName : "AIRPODS",
  Brand : "Oppo",
  productDescription : "Opp Enco earbuds color cherry red | Airpods | ",
  Price : "INR 2599",
  Rating : "⭐⭐⭐⭐ - Rating-4"

}
  return (
    <div className="App">
      <div className="App-card">

     <ProductCard productDetails={ProductOneDetails}/>
     <ProductCard productDetails={ProductTwoDetails}/>
     <ProductCard productDetails={ProductThreeDetails}/>
     <ProductCard productDetails={ProductFourDetails}/>
     <ProductCard productDetails={ProductFiveDetails}/>
      </div>
    </div>
  );
}

export default App;
