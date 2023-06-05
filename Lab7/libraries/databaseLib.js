const postsData = require("../data/postsData.js"); //import postsData (does this file need .j behing it?)
const posts = postsData.posts; // extract posts from import

//example library pretending to connect to database
class Database {
  constructor() {
    this.id = Date.now();
  }
  #log = (value) => {
    console.log(`[Database: ${this.id}]: ${value}`);
  };
  //returns all posts
  getPosts() {
    this.#log("all");
    return posts;
  }
  //returns posts by id
  getPostById(id) {
    this.#log(id);
    const result = posts.filter((post) => {
      if (post.id === id) {
        return post;
      }
    });
    return result;
  }
  //add post
  addPost(data) {
    this.#log(data.title);
    const newId = `${posts.length + 1}`;
    newUrl = data.imgUrl ? data.imgUrl : "https://placehold.co/300x200";
    const newPost = {
      id: newId,
      ...data,
      imgUrl: newUrl,
    };

    posts.push(newPost); //push new post into array
    return posts.length;
  }
}

module.exports = Database;
