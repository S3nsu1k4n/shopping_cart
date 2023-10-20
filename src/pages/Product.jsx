import { useParams } from "react-router-dom";
import getProductData from "../hook/getProductData";
import Navbar from "../components/Navbar";

const Product = () => {
  const { id } = useParams();
  
  const { title, price, description, image, rate, count } = getProductData(id);

  return (
    <>
    <Navbar />

    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} width={128}/>
      <p>{rate} ({count})</p>
      <p>{description}</p>
      <p>{price} €</p>
      <div>
        <label htmlFor="quantity" >Quantity:</label>
        <input type="number" defaultValue={1} min={1} max={99} required />
        <button>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default Product;