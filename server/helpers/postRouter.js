const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const postRouter = (collection) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((posts) => res.json(posts))
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((post) => res.json(post))
      .catch((err) => console.log(err));
  });

  router.post("/", (req, res) => {
    const body = req.body;
    collection
      .insertOne(body)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    collection
      .updateOne({ _id: ObjectID(id) }, { $set: body })
      .then((res) => res.json(body))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then((results) => res.json(results))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = postRouter;
