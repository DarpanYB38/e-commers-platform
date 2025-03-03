import React from "react";
import "./Categories.css"; // Optional: For styling

function Categories({ onSelectCategory }) {
    return (
        <div className="categories-container">
            <h2>Shop by Category</h2>
            <div className="category-buttons">
                <button onClick={() => onSelectCategory("all")}>All</button>
                <button onClick={() => onSelectCategory("electronics")}>Electronics</button>
                <button onClick={() => onSelectCategory("home-furniture")}>Home & Furniture</button>
                <button onClick={() => onSelectCategory("beauty-health")}>Beauty & Health</button>
            </div>
        </div>
    );
}

export default Categories;
