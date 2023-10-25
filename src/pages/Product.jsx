import { useParams } from "react-router-dom";
import getProductData from "../hook/getProductData";
import { useState } from "react";


const Product = ({items, setItems}) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1); 
  console.log(items);
  const { prodcut_id, title, price, description, image, rating } = getProductData(id);

  if (!rating){
    return <p>Loading</p>
  }
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} width={128}/>
      <p>{rating.rate} ({rating.count})</p>
      <p>{description}</p>
      <p>{price} €</p>
      <div>
        <label htmlFor="quantity" >Quantity:</label>
        <input type="number" defaultValue={1} min={qty} max={99} required onChange={(e) => {
          setQty(e.target.value/1);
        }}/>
        <button onClick={() => {
          console.log(qty)
          console.log(title)
          let newItems = {...items};
          if (title in newItems){
            newItems[title].qty += qty;
          }
          else{
            newItems[title] = {price: price, qty: qty};
          }
          setItems(newItems);
        }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;