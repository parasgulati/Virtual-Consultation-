const mongoose=require('mongoose');
const MyBill=mongoose.Schema({
  PatientId:{type:String},
  Type:{type:String},
  Cost:{type:String},
  Status:{type:String},
  Description:{type:String}
});
module.exports =mongoose.model("MyBill",MyBill);