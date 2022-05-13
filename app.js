require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoString = process.env.DATABASE_URL;

app.use(cors());
app.use(bodyParser.json());
//import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//connect to db
mongoose.connect(mongoString, { useNewUrlParser: true }, () => {
  console.log("connected");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
