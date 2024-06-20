const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");
const Item = require("../model/ItemModel");

router.get("/all-items", ItemController.getAllItems);
router.get("/items", ItemController.getSearchedItems); // Ensure this route is correct
router.get("/items/:id", ItemController.getSingleItem);
router.post("/item", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post("/items/:id/comments", async (req, res) => {
  const { user, comment } = req.body;

  // Basic validation
  if (!user || !comment) {
    return res.status(400).send("User and comment are required fields.");
  }

  try {
    console.log("Received comment:", req.body);
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }

    item.comments.push({ user, comment });
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    console.error("Error adding comment:", err);
    res.status(500).send(err.message);
  }
});

// Like and Dislike routes
router.post("/items/:id/like", async (req, res) => {
  const { userId } = req.body;

  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }

    if (item.likes.includes(userId)) {
      return res.status(400).json({ message: "User has already liked this item." });
    }

    item.likes.push(userId);
    item.dislikes = item.dislikes.filter(id => id !== userId); // Remove user from dislikes if present

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/items/:id/dislike", async (req, res) => {
  const { userId } = req.body;

  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send("Item not found");
    }

    if (item.dislikes.includes(userId)) {
      return res.status(400).json({ message: "User has already disliked this item." });
    }

    item.dislikes.push(userId);
    item.likes = item.likes.filter(id => id !== userId); // Remove user from likes if present

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
