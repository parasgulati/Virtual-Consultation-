const mongoose=require('mongoose');
const PatientDetails=mongoose.Schema({
    PatientId:{type:String},
    FirstName:{type:String},
    LastName:{type:String},
    DateOfBirth:{type:String},
    Gender:{type:String},
    Mobile:{type:String},
    Email:{type:String},
    Password:{type:String},
    InsuranceId:{type:String},
    PolicyNumber:{type:String}
});
module.exports =mongoose.model("PatientDetails",PatientDetails);
