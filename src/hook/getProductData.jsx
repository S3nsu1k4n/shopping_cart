import { useEffect, useState } from "react";

const getProductData = ( id ) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [rate, setRate] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
    .then((response) => {
      if (response.status >= 400){
        throw new Error("Server error");
      }
      return response.json()
    })
    .then((response) => {
      setTitle(response.title);
      setPrice(response.price);
      setDescription(response.description);
      setImage(response.image);
      setRate(response.rating.rate);
      setCount(response.rating.count);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);

  return { title, price, description, image, rate, count };
}

export default getProductData;