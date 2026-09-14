const express = require("express");
const bodyParser = require("body-parser");
let products = require("./products.json");

const app = express();
app.use(bodyParser.json());

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product ? res.json(product) : res.status(404).send("Product not found");
});

// POST new product
app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put("/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send("Product not found");
  }
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
