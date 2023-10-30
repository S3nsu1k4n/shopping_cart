import { Link } from "react-router-dom";
import "./card.css"

const Card = ({ title, id, image, rate, count }) => {
  // for each of the products
  // input field for number of products to buy (with inc/dec-buttons)
  // product title
  // add to card button
  return (
      <Link to={`/product/${id}`} className="card">
        <div>
          <p>{title}</p>
          <img src={image} alt={title} width={128}/>
          <p>{rate} ({count})</p>
        </div>
      </Link>
  )
}

export default Card;