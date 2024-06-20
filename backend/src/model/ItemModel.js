const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
});

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  optional: Boolean,
});

const moreSchema = new mongoose.Schema({
  prep_time: { type: String, required: true },
  cook_time: { type: String, required: true },
  servings: { type: String, required: true },
  difficulty: { type: String, required: true },
  source: { type: String, required: true },
});

const itemSchema = new mongoose.Schema({
  menuId: { type: Number, required: true },
  name: { type: String, required: true },
  thumbnail_image: { type: String, required: true },
  category: { type: String, required: true },
  instructions: { type: String, required: true },
  tags: [String],
  ingredients: [ingredientSchema],
  comments: [commentSchema],
  more: moreSchema,
  likes: { type: [String], default: [] }, // Updated to store user IDs
  dislikes: { type: [String], default: [] }, // Updated to store user IDs
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
