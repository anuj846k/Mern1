import express from "express";
import Product from "../models/product.model.js";
import {
  createProduct,
  deleteProduct,
  getProdcuts,
  updatedProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProdcuts);
router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;
