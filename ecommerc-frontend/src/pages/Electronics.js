import React from "react";
import "../styles/Electronics.css"; // Make sure you have some styling

const electronicsProducts = [
    { id: 1, name: "Lenovo IdeaPad 1 ", price: 34749.00, image: "/images/laptop.jpg" },
    { id: 2, name: "Redmi Note 10S", price: 14999.00, image: "/images/phone.jpg" },
    { id: 3, name: "Dison", price: 655.00, image: "/images/headphones.jpg" },
    { id: 4, name: "Fire-Boltt", price: 299.99, image: "/images/Fire-Boltt.jpg" },
    { id: 5, name: "Apple iPhone 14 ", price: 54900.00, image: "/images/i phone.jpg" },
    { id: 6, name: "boAt Rockerz 450,", price: 1399.00, image: "/images/headphone2.jpg" },
    { id: 7, name: "HONOR Pad X8A", price: 13499.00, image: "/images/tablet.jpg" },
    { id: 8, name: "HP Printer", price: 17999.00, image: "/images/printer.jpg" },
    { id: 9, name: "PS5 Gaming Console", price: 49999.00, image: "/images/ps5.jpg" },
    { id: 10, name: "Canon EOS 1500D 24.1MP DSLR Camera", price: 36000.00, image: "/images/camara.jpg" }
    
];

function Electronics({ addToCart }) {
    return (
        <div className="electronics-container">
            <h2>Electronics</h2>
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

export default Electronics;
