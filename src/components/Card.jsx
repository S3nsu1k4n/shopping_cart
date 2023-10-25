import { Link } from "react-router-dom";

const Card = ({ title, id, image, rate, count }) => {
  // for each of the products
  // input field for number of products to buy (with inc/dec-buttons)
  // product title
  // add to card button
  return (
    <div className="card">
      <p>{title}</p>
      <Link to={`/product/${id}`} >
        <img src={image} alt={title} width={128}/>
      </Link>
      <p>{rate} ({count})</p>
    </div>
  )
}

export default Card;