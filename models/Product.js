const mongoose = require("mongoose");
const { Schema } = mongoose;
const reviewSchema = require("./Review");
// const reviewSchema = mongoose.model("review");

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  imgUrl: { type: String, required: true },
  reviews: [reviewSchema]
});

module.exports = mongoose.model("product", productSchema);
