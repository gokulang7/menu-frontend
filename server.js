
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { getMenuCollection, getItemCollection } = require("./db/Connection");

const corsOptions = {
  origin: "http://localhost:3001", 
  methods: ["GET", "POST"], 
  allowedHeaders: ["Content-Type"], 
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.post("/menu", async (req, res) => {
  console.log(req.body);
  try {
    const menuCollection = await getMenuCollection();
    const result = await menuCollection.insertOne(req.body);
    res.status(200).json({ message: "Item Added Succesfully", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal ServerError", error });
  }
});

app.get("/item", async (req, res) => {
  console.log(req.body);
  try {
    const itemCollection = await getMenuCollection();
    const result = await itemCollection.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "InternalServver Error",error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening requests at ${process.env.PORT}`);
});
