import getProductData from "../hook/getProductData";

const Home = () => {
  // few images or information
  const random = (x) => Math.floor(Math.random() * x);
  const product = getProductData(random(21));
  console.log(product)
  return (
    <>
      <h1>Homepage</h1>
      <p>Cool shop where you can buy nice things</p>
      <img src={product.image} alt={product.title} width={256} />
    </>
  )
}

export default Home;