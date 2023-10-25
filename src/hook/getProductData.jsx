import { useEffect, useState } from "react";

const getProductData = ( id='' ) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
    .then((response) => {
      if (response.status >= 400){
        throw new Error("Server error");
      }
      return response.json()
    })
    .then((response) => {
      setData(response);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);
  return data;
}

export default getProductData;