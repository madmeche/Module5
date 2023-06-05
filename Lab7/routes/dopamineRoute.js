const express = require("express");
const router = express.Router();

const feedController = require("../controller/feedController"); //import feed controller

// display all posts
router.get("/posts", (req, res) => {
  feedController.getPosts(req, res); //route traffic to getPosts controller
  // res.status(200).json( {result: 'List the users main feed'})
});

router.get("/posts/:id", (req, res) => {
  feedController.getPostById(req, res); //route traffic with :id to getPostById controller
});

//route to create a post
router.post("/posts/add", (req, res) => {
  feedController.addPost(req, res); //route traffic to createPost controller
});

//route to update a post
router.put("/posts/update/:id", (req, res) => {
  feedController.updatePost(req, res); //route traffic with :id to updatePost controller
});

//route to delete a post
router.delete("/posts/delete/:id", (req, res) => {
  feedController.deletePost(req, res); //route traffic with :id to deletePost controller
});

module.exports = router;
