const mongoose=require('mongoose');
const PrescriptionMedicines=mongoose.Schema({
  PrescriptionId:{type:String},
  MedicineName:{type:String},
  StomachStatus:{type:String},
  DoseAmount:{type:String},
  DurationOfDays:{type:String},
  PartsOfDay:{type:Array} // [0-> morning, 1-> afternoon, 2-> evening, 3-> night]
});
module.exports =mongoose.model("PrescriptionMedicines",PrescriptionMedicines);