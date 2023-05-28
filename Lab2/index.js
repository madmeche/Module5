const express = require('express'); //tells app we need this package
const app = express(); //extracts functions from package
const swaggerUi = require('swagger-ui-express')//import the package
const swaggerDocument = require('./swagger.json'); //points to swagger.json settings file

app.use('/api-docs', //creates new endpoint "/api-docs"
  swaggerUi.serve, //uses the method "serve" from the package
  swaggerUi.setup(swaggerDocument) //passes in swagger.json settings to "setup" method
)

const port = 3000; //define our port number here
const calculatorRoute = require('./routes/calculatorRoute')



const ports = [3001, 3002, 3003]
const servers = []

ports.forEach( () => {
  let app = express()
  servers.push(app)
})


//run server function
//use route "/"
//https://home.com/
//https://home.com/account
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// //add route to test
// app.get('/test', (req, res) => {
//   res.send('This is a test!')
// })

app.use("/", express.static('public'))

app.use('/calculator', calculatorRoute);

//continually listen on this port for traffic, send to routes defined above
app.listen(port, ()=> {
  console.log(`Example app listening at http://localhost:${port}`)
})

servers.forEach(server => {
  let tempPort=ports.pop()

  server.use("/", express.static('public'))
  server.listen(tempPort, ()=> {
    console.log(`Example app listening at http://localhost:${tempPort}`)
  })
})