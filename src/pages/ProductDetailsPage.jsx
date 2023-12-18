import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px" }}
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <br />
      <Link to="/" className="back-button">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
