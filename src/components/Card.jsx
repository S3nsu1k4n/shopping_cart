import { Link } from "react-router-dom";
import getProductData from "../hook/getProductData";

const Card = ({ product_id, onClick }) => {
  // for each of the products
  // input field for number of products to buy (with inc/dec-buttons)
  // product title
  // add to card button
  const { title, price, description, image, rate, count } = getProductData(product_id);

  return (
    <div className="card">
      <p>{title}</p>
      <Link to={`/product/${product_id}`} >
        <img src={image} alt={title} width={128}/>
      </Link>
      <p>{rate} ({count})</p>
    </div>
  )
}

export default Card;