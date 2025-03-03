import React from "react";
import "../styles/Electronics.css"; // Make sure you have some styling

const electronicsProducts = [
    { id: 1, name: "BULLMER Men's Trendy Shirt & Pants Set", price: 999.00, image: "/images/shirt-pant.webp" },
    { id: 2, name: "MANIAC Men's Striped Oversized Shirt & Trousers Set", price: 1629.00, image: "/images/shirts.webp" },
    { id: 3, name: "Men's Solid Color Casual Shirt And Long Pants Set", price: 1599.00, image: "/images/causual.webp" },
    { id: 4, name: "Men's Pants And Khaki Shirt Set", price: 432.00, image: "/images/Mens.webp" },
    { id: 5, name: "Men's Shirt Pant Set", price: 749.00, image: "/images/pant.webp" },
    { id: 6, name: "FUGAZEE Blue Relaxed Baggy Fit Shirt And Trousers", price: 2799.00, image: "/images/gens.webp" }
];

function Fashion({ addToCart }) {
    return (
        <div className="electronics-container">
            <h2>Fashion for Men</h2>
            <div className="products-grid">
                {electronicsProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>INR {product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fashion;
