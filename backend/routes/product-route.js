import express from "express";

import { deleteProducts, getProducts, newProducts, updateProducts } from "../controllers/product-controller.js";

const router = express.Router();

router.get("/", getProducts); // to fetch all products

router.post("/", newProducts); // to create new products

router.put("/:_id", updateProducts); // to update 

router.delete("/:_id", deleteProducts); // to delete 

export default router;
