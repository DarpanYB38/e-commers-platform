const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

// Product Model
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const Product = mongoose.model("Product", ProductSchema);

// Routes
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post("/order", (req, res) => {
    console.log("Order Received:", req.body);  // ✅ Check if request is received

    if (!req.body.cart || req.body.cart.length === 0) {
        return res.status(400).json({ message: "Cart is empty" });
    }

    res.json({ message: "Order placed successfully!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
