import "./ProductCard.css"
export default function ProductCard({productDetails}){

    const { 
productId ,
    productPic ,
    productName ,
    Brand ,
    productDescription,
    Price ,
    Rating 

    }=productDetails;
    
    function handleOnClick(){
        alert(" Product of is  " + productId + ", which is " + productName +" of brand "  + Brand + " has of rupees " + Price + " is added in the cart , please proceed to pay !!! ")
    }
    return(
        <div className="card">
        <img src= {productPic} alt="" height="230px" width="200px"/>
        <h3 className="grey pname">{productName}</h3>
        <p className="description grey">{productDescription}</p>
        <h3 className="yellow">{Price}</h3>
        <p>{Rating}</p>
        <button className="btn-add" onClick={handleOnClick}>Add to Cart</button>
        </div>
    );
}


