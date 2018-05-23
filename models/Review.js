const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  rating: Number,
  summary: String,
  dateReviewed: Date
});

// module.exports = mongoose.model("review", reviewSchema);
module.exports = reviewSchema;
