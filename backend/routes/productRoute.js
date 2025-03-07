import express from "express";
import {
  deleteproduct,
  getproduct,
  postproduct,
} from "../controllers/productController.js";

export const router = express.Router();

router.get("/", getproduct);
router.post("/", postproduct);
router.delete("/:id", deleteproduct);
