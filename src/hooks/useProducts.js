import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          "https://my-travel-ease-server.vercel.app/products"
        );
        setProducts(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error, setProducts };
};

export default useProducts;
