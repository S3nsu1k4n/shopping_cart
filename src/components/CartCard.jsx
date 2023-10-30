import "./CartCard.css"

const CartCard = ({title, image, quantity, price, setItems, items}) => {
  return (
    <div className="cart_card">
      <p>{title}</p>
      <img src={image} alt={title} width={64} />
      <div className="cart_card_table">
        <p>Quantity:</p>
        <input type="number" defaultValue={quantity} min={1} max={99} required onChange={(e) => {
          let newItems = {...items};
          newItems[title].qty = e.target.value/1;
          setItems(newItems);
        }}/>
        <p>Single Price:</p>
        <p>{price} €</p>
        <p>Total:</p>
        <p>{(quantity * price).round(2)} €</p>
      </div>
      
      <button onClick={() => {
        let newItems = {...items};
        delete newItems[title];
        setItems(newItems);
      }}>Remove</button>

    </div>
  )
}

export default CartCard;