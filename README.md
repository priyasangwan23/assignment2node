# Products API

A simple REST API built using Node.js and Express to manage products. It supports creating, reading, and updating product details such as price, stock, and category.

## Base URL


http://localhost:3000


After deployment:



https://assignment2node.onrender.com



## Features

* Get all products
* Get product by ID
* Get products by category
* Create a new product
* Replace a product
* Update product stock
* Update product price



## API Endpoints

### Get all products


GET /products


### Get product by ID

```
GET /products/:id
```

### Get products by category

```
GET /products/category/:categoryName
```

### Create new product

```
POST /products
```

Body (JSON):

```
{
  "name": "Product Name",
  "category": "Category",
  "price": 1000,
  "stock": 10,
  "rating": 4.5
}


### Replace full product

```
PUT /products/:id
```

### Update stock only

```
PUT /products/:id/stock
```

Body:

{
  "stock": 50
}
```

### Update price only

```
PUT /products/:id/price
```

Body:

```
{
  "price": 2000
}
```

---

## How to run locally

Install dependencies:

```
npm install
```

Start server:

```
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

## Tech Stack

* Node.js
* Express.js
* REST API
* JSON

#Author

Priya Sangwan