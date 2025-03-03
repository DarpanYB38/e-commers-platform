import React from "react";
import "../styles/Electronics.css"; // Make sure you have some styling

const electronicsProducts = [
    { id: 1, name: "Mamaearth Creamy Matte Long Stay Lipstick", price: 239.00, image: "/images/lipstic.webp" },
    { id: 2, name: "Blue Heaven Festive Fair Tone Combo Makeup Kit", price: 699, image: "/images/makeupkit.webp" },
    { id: 3, name: "Mamaearth Nourishing Natural Lip Cheek & Eye Tint", price: 300, image: "/images/mamaearth.webp" },
    { id: 4, name: "SoulTree Ayurvedic Lipstick", price: 1295, image: "/images/lipstic2.webp" },
    { id: 5, name: "Elle 18 Color Pop Matte Lip", price: 90, image: "/images/elle18.webp" },
    { id: 6, name: "Lakme Perfecting Liquid Foundation", price: 156, image: "/images/shopping.webp" },
    { id: 7, name: "Insight Cosmetics Non Transfer Lip", price: 104, image: "/images/unisex.webp" },
    { id: 8, name: "Unisex Dream Gifting Kit", price: 269, image: "/images/facemask.webp" },
    { id: 9, name: "Tyrodin Face Serum", price: 562, image: "/images/viatminc.webp" },
    { id: 10, name: "Quat Vitamin C With E Fairness Serum Whitening & Brightning Skin 30ml", price: 226, image: "/images/skin.webp" },
    { id: 11, name: "Ensley Skin Brightening Serum For Glowing & Clear Skin Whitening Dark Spot Corrector", price: 299, image: "/images/vitaminc2.webp" },
    { id: 12, name: "Md Cosmetic Vitamin C Serum", price: 295, image: "/images/md.webp" }
];

function BeautyHealth({ addToCart }) {
    return (
        <div className="electronics-container">
            <h2>Beauty & Health</h2>
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

export default BeautyHealth;
