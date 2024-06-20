const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 5000;
const cors = require("cors");


app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/food");

  app.get("/", (req, res) => {
    res.send(" Foood app Server");
  });
}
main()
  .then(() => console.log("DB Connect"))
  .catch((err) => console.log(err));

const ItemRoutes = require("./src/routes/ItemRoutes");
const CategoryRoutes = require("./src/routes/categoryRoutes");
const authRoutes = require("./src/routes/authRoutes");
const contactRoutes = require("./src/routes/contactRoutes");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
