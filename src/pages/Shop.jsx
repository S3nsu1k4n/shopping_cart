import Card from "../components/Card";
import getProductData from "../hook/getProductData";


const Shop = () => {
  const product_data = getProductData();
  return (
    <>
      <h1>Shop</h1>
      <div className="card-container">
        { 
            product_data != undefined && product_data.map((product) => <Card key={product.id} title={product.title} id={product.id} image={product.image} rate={product.rating.rate} count={product.rating.count} />)
        }
      </div>
    </>
  )
}

export default Shop;