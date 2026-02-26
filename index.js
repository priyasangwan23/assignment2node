const express = require("express");
const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];


// GET ALL PRODUCTS
app.get("/products", (req, res) => {
  res.status(200).json(products);
});


// GET PRODUCT BY ID
app.get("/products/:id", (req, res) => {
  const productID = Number(req.params.id);
  const product = products.find(p => p.id === productID);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
});


// GET PRODUCTS BY CATEGORY
app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;

  const filteredProducts = products.filter(p =>
    p.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({
      message: "No products found in this category"
    });
  }

  res.status(200).json(filteredProducts);
});


// CREATE NEW PRODUCT
app.post("/products", (req, res) => {

  const { name, category, price, stock, rating } = req.body;

  if (!name || !category || !price || !stock || !rating) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock,
    rating
  };

  products.push(newProduct);

  res.status(201).json({
    message: "New product created",
    product: newProduct
  });
});


// REPLACE FULL PRODUCT (PUT)
app.put("/products/:id", (req, res) => {

  const productID = Number(req.params.id);
  const index = products.findIndex(p => p.id === productID);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, category, price, stock, rating } = req.body;

  products[index] = {
    id: productID,
    name,
    category,
    price,
    stock,
    rating
  };

  res.status(200).json({
    message: "Product replaced successfully",
    product: products[index]
  });
});


// UPDATE ONLY STOCK
app.put("/products/:id/stock", (req, res) => {

  const productID = Number(req.params.id);
  const product = products.find(p => p.id === productID);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.stock = req.body.stock;

  res.status(200).json({
    message: "Stock updated successfully",
    product
  });
});


// UPDATE ONLY PRICE

app.put("/products/:id/price", (req, res) => {

  const productID = Number(req.params.id);
  const product = products.find(p => p.id === productID);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.price = req.body.price;

  res.status(200).json({
    message: "Price updated successfully",
    product
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});