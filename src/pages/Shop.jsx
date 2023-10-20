import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Shop = () => {
  return (
    <>
      <Navbar />
      <h1>Shop</h1>
      <div className="card-container">
        {[...Array(21).keys()].map((id)=> <Card key={id} product_id={id} />)}
        
      </div>
    </>
  )
}

export default Shop;