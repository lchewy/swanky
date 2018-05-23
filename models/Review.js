const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  rating: { type: Number, required: true },
  summary: { type: String, required: true },
  dateReviewed: Date
});

// module.exports = mongoose.model("review", reviewSchema);
module.exports = reviewSchema;
