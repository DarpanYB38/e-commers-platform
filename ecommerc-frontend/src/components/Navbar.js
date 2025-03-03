import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h2 style={styles.brand}>E-Commerce</h2>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/products" style={styles.link}>Products</Link></li>
                <li><Link to="/cart" style={styles.link}>Cart</Link></li>
                <li><Link to="/login" style={styles.link}>Login</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
    },
    brand: {
        margin: 0,
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "18px",
    }
};

export default Navbar;
