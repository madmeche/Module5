const Calculator = require("../libraries/calculator");

const Testing = require("../libraries/test");
const testCalc = new Testing()

const testAdd = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let sum = testCalc.add(num1, num2);
  console.log("Sum:", sum);
  res.status(200);
  res.json({ result: sum });
};


// const test2 = require("../");

const myCalc = new Calculator();

const addNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.add(num1, num2);
  console.log("Sum:", sum);
  res.status(200);
  res.json({ result: sum });
};

const subNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.sub(num1, num2);
  console.log("Sum:", sum);
  res.status(200);
  res.json({ result: sum });
};

const divNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    res.status(400);
    res.json({ error: "Cannot divide by zero" });
  } else {
    let sum = myCalc.div(num1, num2);
    console.log("Sum:", sum);
    res.status(200);
    res.json({ result: sum });
  }
};

const multNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.mult(num1, num2);
  console.log("Sum:", sum);
  res.status(200);
  res.json({ result: sum });
};

const squareNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);

  let sum = myCalc.square(num1);
  console.log("Sum:", sum);
  res.status(200);
  res.json({ result: sum });
};

const sqRtNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1);
  if (num1 <0) {
    res.status(400);
    res.json({ error: "Cannot take square root of negative" });
  } else {
    let sum = myCalc.sqRt(num1);
    console.log("Sum:", sum);
    res.status(200);
    res.json({ result: sum });
  }
};

const testFunction = () => {
  myCalc.test();
};

module.exports = {
  addNumbers,
  subNumbers,
  divNumbers,
  multNumbers,
  squareNumbers,
  sqRtNumbers,
  testFunction,
  testAdd,
};
