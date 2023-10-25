const Cart = ({items}) => {
  // show number of items
  //checkout and pay

  return (
    <>
      <h1>Cart</h1>
      <div>
        {
          Object.entries(items).map(item => <div key={item[0]}><p>{item[0]}</p><p>{item[1].qty}</p><p>{item[1].price}<p>{item[1].qty * item[1].price}</p></p></div>)
        }
      </div>
    </>
  )
}

export default Cart;