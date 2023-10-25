import { useState } from "react";
import Card from "../components/Card";
import getProductData from "../hook/getProductData";
import DropDown from "../components/DropDown";

const get_categories = (items, result=[]) => {{
  if(!items) return result;

  for (const item of items){
    if(result.indexOf(item.category) === -1){
      result.push(item.category);
    }
  }
  return result;
}
}

const Shop = () => {
  const product_data = getProductData();
  const options = get_categories(product_data);
  const [productCategory, setProductCategory] = useState("All");
  return (
    <>
      <h1>Shop</h1>
      <DropDown shownItem={productCategory} setShownItem={setProductCategory} options={options}/>
      <div className="card-container">
        { 
            product_data != undefined && product_data.map((product) => {
              return ((product.category == productCategory) || productCategory === 'All') && <Card key={product.id} title={product.title} id={product.id} image={product.image} rate={product.rating.rate} count={product.rating.count} />
            })
        }
      </div>
    </>
  )
}

export default Shop;