import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.js";
import "./App.css";
import "../src/pages/Home.css";
import Navbar from "../src/components/Navbar.js";
import Electronics from "../src/pages/Electronics.js";
import HomeFurniture from "../src/pages/HomeFurniture.js";
import BeautyHealth from "../src/pages/BeautyHealth.js";
import Fashion from "./pages/Fashion.js";
import { Link } from "react-router-dom";


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    // Add product to cart
    const addToCart = (product) => {
        setCart(prevCart => {
            const newCart = [...prevCart, product];
            console.log("Updated Cart:", newCart); // ✅ Check if cart updates
            return newCart;
        });
    }; 
    
    // Place order
    const placeOrder = () => {
        console.log("Placing Order...");  // ✅ Should appear when button is clicked
        console.log("Cart Data:", cart);  // ✅ Check if cart has items
    
        if (cart.length === 0) {
            console.log("Cart is empty!");  // ✅ See if cart is empty
            alert("Cart is empty! Add products before placing an order.");
            return;
        }
    
        axios.post("http://localhost:5000/order", { cart })
            .then(response => {
                console.log("Order Response:", response.data);  // ✅ Check server response
                alert(response.data.message);
            })
            .catch(error => console.error("Order Error:", error));  // ✅ Log errors
    };
    
    

    return (
        <Router>
            <Navbar />
            {/*<h1>E-commerce Platform</h1>

            <h2>Products</h2>
            <div className="products-container">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name} - ${product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p> // ✅ Displays a message while fetching data
                )}
            </div>*/}
            <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        {/*<button className="shop-now-btn">Shop Now</button>*/}
      </div>
  

      {/* Categories Section */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
        <div className="category-card"><Link to="/electronics">Electronics</Link></div>
        <div className="category-card"><Link to="/fashion">Fashion</Link></div>
        <div className="category-card"><Link to="/home-furniture">Home & Furniture</Link></div>
        <div className="category-card"><Link to="/beauty-health">Beauty & Health</Link></div>
           {/* Render Categories Component */}
           
        </div>
      </div>
      <Routes>
                <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
                <Route path="/electronics" element={<Electronics products={products} addToCart={addToCart} />} />
                <Route path="/fashion" element={<Fashion products={products} addToCart={addToCart} />} />
                <Route path="/home-furniture" element={<HomeFurniture products={products} addToCart={addToCart} />} />
                <Route path="/beauty-health" element={<BeautyHealth products={products} addToCart={addToCart} />} />
    </Routes>
            <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="/images/product 1.jpeg" alt="Product 1" />
            <h3>Formal's Trousers & shirts Combo</h3>
            <p>INR 499.00</p>
            <button onClick={() => addToCart({ name: "Formal's Trousers & shirts Combo", price: 499.00, image: "/images/product 1.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/product2.jpeg" alt="Product 2" />
            <h3>Casual shirts</h3>
            <p>INR 559.00</p>
            <button onClick={() => addToCart({ name: "Casual shirts", price: 559.00, image: "/images/product2.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/product3.jpeg" alt="Product 3" />
            <h3>BULLMER Men's Trendy Shirt & Pants Set</h3>
            <p>INR 709.00</p>
            <button onClick={() => addToCart({ name: "BULLMER Men's Trendy Shirt & Pants Set", price: 709.00, image: "/images/product3.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/phone.jpg" alt="Product 3" />
            <h3>Redmi Note 10S</h3>
            <p>INR 14999</p>
            <button onClick={() => addToCart({ name: "Redmi Note 10S", price: 14999.00, image: "/images/phone.jpg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/printer.jpg" alt="Product 3" />
            <h3>HP Printer</h3>
            <p>INR 17999</p>
            <button onClick={() => addToCart({ name: "HP Printer", price: 17999.00, image: "/images/printer.jpg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/lamp-storage.jpg" alt="Product 3" />
            <h3>Crosscut Furniture</h3>
            <p>INR 2679</p>
            <button onClick={() => addToCart({ name: "Crosscut Furniture", price: 2679.00, image: "/images/lamp-storage.jpg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/sofa_set.jpeg" alt="Product 3" />
            <h3>Sofa set</h3>
            <p>INR 27000</p>
            <button onClick={() => addToCart({ name: "Sofa Set", price: 27000.00, image: "/images/sofa_set.jpeg" })}>
        Add to Cart
        </button>
          </div>
          <div className="product-card">
            <img src="/images/mamaearth.webp" alt="Product 3" />
            <h3>Mamaearth Nourishing Natural Lip Cheek & Eye Tint</h3>
            <p>INR 300</p>
            <button onClick={() => addToCart({ name: "Mamaearth Nourishing Natural Lip Cheek & Eye Tint", price: 300.00, image: "/images/mamaearth.webp" })}>
        Add to Cart
        </button>
          </div>
        </div>
      </div>
    </div>

            <Routes>
                <Route path="/" element={<Home />} />
                
            </Routes>

            <div className="cart-container">
                <h2>Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty</p> // ✅ Displays when cart is empty
                )}
                <button onClick={placeOrder}>Place Order</button>


            </div>
        </Router>
    );
}

export default App;
