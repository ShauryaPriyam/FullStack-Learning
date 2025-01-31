import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAT , updatedAt
  }
);

// module.exports =mongoose.model ('Product',productSchema)

const Product = mongoose.model("Product", productSchema);

export default Product;
