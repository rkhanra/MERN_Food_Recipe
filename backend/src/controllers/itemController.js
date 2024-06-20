const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Error fetching items!" });
  }
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items = [];
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items); // Always return a JSON response
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Error fetching items!" }); 
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.json(item);
  } catch (error) {
    
    res.status(500).json({ message: "Error fetching item!" });
  }
};

module.exports = { getAllItems, getSearchedItems, getSingleItem };
