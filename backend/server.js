import express from "express";
import data from "./data";
import dotenv from "dotenv";
const bodyParser = require("body-parser");
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) res.send(product);
//   else res.status(404).send({ msg: "Product Not Found." });
// });

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
