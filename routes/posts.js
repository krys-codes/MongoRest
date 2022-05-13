const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get 5 posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().limit(5);
    res.json({ posts });
  } catch (error) {
    res.json({ message: error });
  }
});

//submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

//get post by id
router.get("/:postId", async (req, res) => {
  try {
    const findPost = await Post.findById(req.params.postId);
    res.json(findPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete post by Id
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
