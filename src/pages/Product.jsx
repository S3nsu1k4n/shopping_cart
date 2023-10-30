import { useParams } from "react-router-dom";
import getProductData from "../hook/getProductData";
import { useState } from "react";
import "./Product.css"


const Product = ({items, setItems}) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const {title, price, description, image, rating } = getProductData(id);

  if (!rating){
    return <p>Loading</p>
  }
  return (
    <div className="product">
      <h1>{title}</h1>
      <img src={image} alt={title} width={128}/>
      <p>{rating.rate} ({rating.count})</p>
      <p>{description}</p>
      <div className="product_table">
        <p>Price:</p>
        <p>{price} €</p>
        <label htmlFor="quantity" >Quantity:</label>
        <input type="number" defaultValue={1} min={1} max={99} required onChange={(e) => {
          setQty(e.target.value/1);
        }}/>
        <button onClick={() => {
          let newItems = {...items};
          if (title in newItems){
            newItems[title].qty += qty;
          }
          else{
            newItems[title] = {image: image, price: price, qty: qty};
          }
          setItems(newItems);
        }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;