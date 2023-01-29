const path = require("path");
const dotenv = require("dotenv");
const Product = require("../models/product");
const connectDatabase = require("../config/database");

const products = require("../data/products");

// Setting dotenv file
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All Products are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
