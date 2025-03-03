import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/Home.css";
import "../App.css";
function Home({ addToCart }) {

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home & Furniture</div>
          <div className="category-card">Beauty & Health</div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="/images/product 1.jpeg" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$99.99</p>
            <button onClick={() => addToCart({ name: "Product Name 1", price: 99.99, image: "/images/product 1.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/product2.jpeg" alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$79.99</p>
            <button onClick={() => addToCart({ name: "Product Name 2", price: 79.99, image: "/images/product2.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/product3.jpeg" alt="Product 3" />
            <h3>Product Name 3</h3>
            <p>$49.99</p>
            <button onClick={() => addToCart({ name: "Product Name 3", price: 49.99, image: "/images/product3.jpeg" })}>
        Add to Cart
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default Home;
