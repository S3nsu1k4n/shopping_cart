import CartCard from "../components/CartCard";
import "./Cart.css"

const Cart = ({items, setItems}) => {
  // show number of items
  //checkout and pay

  const total = (items) => {
    let sum = 0;
    for (const [k, v] of Object.entries(items)){
      sum += v.price * v.qty;
    }
    return sum.round(2);
  }
  
  return (
    <>
      <h1>Cart</h1>
      <div className="cart_cards">
        {
          Object.entries(items).map(item => item[0] && <CartCard key={item[0]} title={item[0]} image={item[1].image} quantity={item[1].qty} price={item[1].price} setItems={setItems} items={items} />)
        }
      </div>
      
      <div className="checkout">
        <p>Total price:</p>
        <p>{total(items)} €</p>
        <button onClick={() => {
          alert("Thank you for ordering!\nYour products will arrive soon!");
          setItems({});
        }
        }>Order now</button>
      </div>
    </>
  )
}

export default Cart;