import { Link } from "react-router-dom";

const countItems = (items, sum=0) => {
  if(!items) return sum;

  for (const [key, value] of Object.entries(items)){
    sum += value.qty;
  }
  return sum;
}


const Navbar = ({items}) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({countItems(items)})</Link>
    </nav>
  )
}

export default Navbar;