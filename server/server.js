const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const PostRouter = require("./helpers/postRouter");
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect("mongodb://localhost:27017/PersonalDB").then((client) => {
  const db = client.db("PersonalDB");
  const postCollection = db.collection("posts");
  const postRouter = PostRouter(postCollection);
  app.use("/api/posts", postRouter);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
