const mongoose=require('mongoose');
const Medication=mongoose.Schema({
    MedicationId:{type:String},
    MedicationName:{type:String},
    CostOfCare:{type:String},
    DoctorFees:{type:String}
});
module.exports =mongoose.model("Medication",Medication);