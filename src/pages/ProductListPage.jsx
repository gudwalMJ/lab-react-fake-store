import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px", height: "200px" }}
            />
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
