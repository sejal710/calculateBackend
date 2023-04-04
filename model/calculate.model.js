const mongoose = require("mongoose");

const calculateSchema = mongoose.Schema({
  amount:{type:Number,required:true},
  rate:{type:Number,required:true},
  years:{type:Number,required:true},
  user : {type:String,required:true}
},{
    varsionKey:false
})

const CalcuModel = mongoose.model("calculate",calculateSchema);

module.exports = {CalcuModel};