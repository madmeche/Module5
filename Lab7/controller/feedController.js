const Database = require("../libraries/databaseLib");

const db = new Database();
// const get = async (req, res) => {
//     const { id } = req.params
//     const { rows } = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
//     res.status(200).json(rows[0])
//     }

//function to get all posts
const getPosts = (req, res) => {
  const data = db.posts(); //calls database to get all posts
  res.status(200).json({ result: data }); //
};

//function to get post by id (from route)
const getPostById = (req, res) => {
  const id = req.params.id; //extract id from params
  const data = db.postById(id); //calls database to get post by id

  if (data.length > 0) {
    res.status(200).json({ result: data }); //if post is found, return it
  } else {
    res.status(404).json({ message: `Post ${id} not found` }); //if post is not found, return error
  }
};

const addPost = (req, res) => {
  const data = req.body; //extract data from body
  // const newPost = db.addPost(data) //calls database to add post
  console.log("Add Post", req.body);
  if (data.title && data.content) {
    const result = db.addPost(data); //calls database to add post
    res.status(201).json({ result: "Post created!", databaseLength: result }); //if post is added, return it
  } else {
    //else correct data properties don't exist, return error 400
    res.status(400).json({ message: "Please provide title and content" }),
      console.log("Post not created");
  }
};

const updatePost = (req, res) => {
  const id = req.params.id; //extract id from params
  const data = req.body; //extract data from body
  const result = db.updatePost(id, data); //calls database to update post
  if (result) {
    res.status(200).json({ result: "Post updated!" }), //if post is updated, return it
      console.log("Post updated");
  } else {
    //else post is not updated, return error 404
    res.status(404).json({ message: `Post ${id} not found` }),
      console.log("Post not updated");
  }
};

const deletePost = (req, res) => {
  const id = req.params.id; //extract id from params
  const result = db.deletePost(id); //calls database to delete post
  if (result) {
    res.status(200).json({ result: "Post deleted!" }), //if post is deleted, return it
      console.log("Post deleted");
  } else {
    //else post is not deleted, return error 404
    res.status(404).json({ message: `Post ${id} not found` }),
      console.log("Post not deleted");
  }
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
