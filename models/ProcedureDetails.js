const mongoose=require('mongoose');
const ProcedureDetails=mongoose.Schema({
  PatientId:{type:String},
  DoctorId:{type:String},
  Place:{type:String},
  Timestamp:{type:String}
});
module.exports =mongoose.model("ProcedureDetails",ProcedureDetails);