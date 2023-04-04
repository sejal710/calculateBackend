const {CalcuModel} = require("../model/calculate.model");
const express = require("express");

const calcuRouter = express.Router();

calcuRouter.post("/",async(req,res) => {
    const {amount,rate,years,user}= req.body
    const i = rate / 100;
    const F = amount * (((1 + i) ** years) - 1) / i;
    const investmentAmount = amount * years;
    const interestGained = F - investmentAmount;
    try{
       const  data = new CalcuModel({amount,rate,years,user});
       await data.save();
       res.json({totalInvestmentAmount: investmentAmount,
        totalInterestGained: interestGained,
        totalMaturityValue: F})
    }
    catch(e){
        res.send({Message:e.message})
    }
    res.send(req.body)
})

module.exports = {calcuRouter}