import React from "react";
import "../styles/Electronics.css"; // Make sure you have some styling

const electronicsProducts = [
    { id: 1, name: "Double Cot Bed", price: 49000.00, image: "/images/beds.jpeg" },
    { id: 2, name: "Sofa Set", price: 27000.00, image: "/images/sofa_set.jpeg" },
    { id: 3, name: "Wodden Storage Areas", price: 8000.00, image: "/images/storage-ares.jpeg" },
    { id: 4, name: "UHUD CRAFTS", price: 379.00, image: "/images/small-table.jpg" },
    { id: 5, name: "Crosscut Furniture", price: 2679.00, image: "/images/lamp-storage.jpg" },
    { id: 6, name: "CraftsX2Z", price: 429.00, image: "/images/wooden-table.jpg" },
    { id: 7, name: "Furniture Cafe", price: 499.00, image: "/images/extra-storage.jpg" },
    { id: 8, name: "STAR WORK", price: 2625.00, image: "/images/STAR WORK.jpg" },
    { id: 9, name: "Nilkamal", price: 10199.00, image: "/images/Nilkamal.jpg" },
    { id: 10, name: "Global Grabbers", price: 379.00, image: "/images/Global Grabbers.jpg" }
    
];

function HomeFurniture({ addToCart }) {
    return (
        <div className="electronics-container">
            <h2>Home Furniture</h2>
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

export default HomeFurniture;
