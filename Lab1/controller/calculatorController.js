const Calculator = require("../libraries/calculator");

const test2 = require('../')

const myCalc = new Calculator()

const addNumbers = (req, res) => {
  console.log(req.query)
  let num1 = parseInt(req.query.num1)
  let num2 = parseInt(req.query.num2)

  let sum= myCalc.add(num1, num2)
  console.log('Sum:', sum)
  res.status(200)
  res.json({result: sum})
}

const testFunction = () =>{
  myCalc.test()
}

module.exports = {
  addNumbers,
  testFunction
}
