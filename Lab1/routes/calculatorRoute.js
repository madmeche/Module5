const express = require('express');
const router = express.Router();

const calculatorController = require('../controller/calculatorController')
   
router.get('/add', (req,res)=> { //gives you access to add folders with this function
    calculatorController.addNumbers(req,res)
})

router.get('/test', (req,res) => {
    calculatorController.testFunction(req,res)
    })

module.exports = router ;