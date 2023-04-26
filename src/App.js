
import './App.css';
import Card from './Card';

function App() {
  
  const productDetails = [
    {
      productId : '1',
      productPic : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0iXbSWW2riIzv5T8rKuh8seHCtj_FspBxi7l5s2u0-fgUlLNU",
      productName : "SHOES",
      Brand : "Adidas",
      productDescription : "Hey Dude Men's Wally Linen Iron Size 11 | Mens Shoes | ",
      Price : "INR 4301",
      Rating : "⭐⭐⭐⭐ - Rating-4"
    },
    {
      productId : '2',
      productPic : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTessE3KZD9eAQWQ9x9o8dCMfaVWw63_bEeEBpc2yUKhV-wbPDZ",
      productName : "WATCH",
      Brand : "Curion",
      productDescription : "Hey Dude Men's Wally Linen Iron Size 11 | Mens Shoes | ",
      Price : "INR 1091",
      Rating : "⭐⭐⭐⭐ - Rating-4"
    },
    {
      productId : '3',
      productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTwxNF6kokdgOxUr4qDdxuSZBqpi6qQQT6UkwoZu1-_qSEGG7",
      productName : "T-SHIRT",
      Brand : "Adidas",
      productDescription : "Hey Dude Men's T-Shirt Size 11 | Mens Shirt | ",
      Price : "INR 2599",
      Rating : "⭐⭐⭐⭐ - Rating-4"
    }
  ];
  return (
    <div className="App">
      <div className="App-card">
        {productDetails.map(productDetail => (
          <Card key={productDetail.productId} productDetails={productDetail} />
        ))}
      </div>
    </div>
  );
}

export default App;
