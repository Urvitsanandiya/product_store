import { Product } from "../models/productModel.js";

export const getproduct = async (req, res) => {
  try {
    const getProduct = await Product.find();
    res.status(201).json(getProduct);
  } catch (error) {
    res.status(500).json({ message: "getproduct error" });
  }
};

export const postproduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;
    const addproducts = new Product({ name, price, image, description });
    await addproducts.save();
    res.status(200).json({ message: "add success", product: addproducts });
  } catch (error) {
    res.status(500).json({ message: "postproduct error", error });
  }
};

export const deleteproduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "product delete successful" });
  } catch (error) {
    res.status(500).json({ message: "deleteproduct error" });
  }
};
