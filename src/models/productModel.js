import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  type: ["ClC", "RZM", "FTS", "BDB"],
  title: {
    type: String,
    required: [true, "please provide a title"],
  },
  description: {
    type: String,
    required: [true, "please write description"],
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  tags: [],
});

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
