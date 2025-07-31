
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './config';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-container">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
