require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB_CONNECTION;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes import
const productsRoute = require("./routes/products");
// const usersRoute = require("./routes/users");

// create express app
const app = express();
app.use(cors());
// Increase the maximum payload size to 50MB
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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
