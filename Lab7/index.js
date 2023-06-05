const express = require('express'); //tells app we need this package
const app = express(); //extracts functions from package

const dopamineRoute = require('./routes/dopamineRoute'); // imports the feed route

const port = 3000 //define our port here

app.use(express.json()); //tells the app to parse json automatically

//define endpoints here where traffic will go
app.use("/", express.static('public')) //serves any files located in the /public folder
app.use("/feed", dopamineRoute); //routes traffic pointed at localhost:3000/feed to this router

app.listen(port, ()=> {
  console.log(`Dopamine app listening at http://localhost:${port}`)
})


// const express = require('express'); //tells app we need this package
// const app = express(); //extracts functions from package
// const swaggerUi = require('swagger-ui-express')//import the package
// const swaggerDocument = require('./swagger.json'); //points to swagger.json settings file

// app.use('/api-docs', //creates new endpoint "/api-docs"
//   swaggerUi.serve, //uses the method "serve" from the package
//   swaggerUi.setup(swaggerDocument) //passes in swagger.json settings to "setup" method
// )

// const port = 3000; //define our port number here
// const dopamine = require('./routes/dopamineRoute')



// const ports = [3001, 3002, 3003]
// const servers = []

// ports.forEach( () => {
//   let app = express()
//   servers.push(app)
// })

// app.use("/", express.static('public'))

// app.use('/dopamine', dopamine);

// //continually listen on this port for traffic, send to routes defined above
// app.listen(port, ()=> {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// servers.forEach(server => {
//   let tempPort=ports.pop()

//   server.use("/", express.static('public'))
//   server.listen(tempPort, ()=> {
//     console.log(`Example app listening at http://localhost:${tempPort}`)
//   })
// })


