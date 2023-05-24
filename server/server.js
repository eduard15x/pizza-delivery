require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB_CONNECTION;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// routes import
const productsRoute = require("./routes/products");
// const usersRoute = require("./routes/users");

// create express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/menu", productsRoute);

// connection to mongodb
mongoose
  .connect(MONGODB)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(
        "Connection successful to MongoDB & listening on port " + PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
