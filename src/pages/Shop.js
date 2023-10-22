import React, { useState } from "react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 19.99,
      image: "https://placehold.co/200x200", // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 29.99,
      image: "https://placehold.co/200x200", // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      price: 39.99,
      image: "https://placehold.co/200x200", // Replace with the actual image URL
    },
    // Add more products as needed
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      {cart.length > 0 && <button className="checkout-button">Checkout</button>}
    </div>
  );
};

export default Shop;
