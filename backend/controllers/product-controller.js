import Product from "../models/product-model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, data: "error occur!" });
  }
};

export const newProducts = async (req, res) => {
  let product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  try {
    const newProduct = await Product.create(product);
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProducts = async (req, res) => {
  const { _id } = req.params;
  const product = req.body;
  try {
    const productDetail = await Product.findOneAndUpdate({ _id }, product, {
      new: true,
    });
    if (!productDetail) {
      return res
        .status(404)
        .json({ success: false, data: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, data: "Product updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, data: "An error occurred" });
  }
};

export const deleteProducts = async (req, res) => {
  const { _id } = req.params;
  const product = req.body;
  try {
    const productDetail = await Product.findOneAndDelete({ _id });
    if (!productDetail) {
      return res
        .status(404)
        .json({ success: false, data: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, data: "Product deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, data: "An error occurred" });
  }
};
