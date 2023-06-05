function createPost() {
  //get element values from form
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const imgUrl = document.getElementById("ImgUrl");

  //create a new object and assign values to keys
  const newPost = {
    title: title.value,
    content: content.value,
    imgUrl: imgUrl.value,
  };
  //send object to server
  fetch("/api/posts", {
    method: "POST", //since we are sending data, we need to specify the method
    body: JSON.stringify(newPost), //this attaches our data to the request body (after converting it to JSON)
    headers: {
      "Content-Type": "application/json, charset=UTF-8", //setting the headers is good practice
    },
  })
  
  .then((response) => response.json()) //we want to parse the response as JSON
  //if the request is successful, we want to redirect the user to the homepage

  .then((data) => {
    console.log(data);
    //if the post was created successfully, we want to redirect the user to the homepage
    if (data.result) {
        console.log(data.result)
        location.assign("http://localhost:3000/")
        } else if(data.error) {
            //if the post was not created successfully, we want to display an error message
            console.log(data.error)
            const errorElement = document.getElementById("error")
            errorElement.innerHTML = data.error
            }
            })
    .catch((error) => console.error(error)); //no need to redirect if there is an error
}
