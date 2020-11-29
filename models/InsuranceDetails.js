const mongoose=require('mongoose');
const InsuranceDetails=mongoose.Schema({
    InsurancId:{type:String},  // it maps details of insurance
    ClaimAmount:{type:String},
    InstallmentAmount:{type:String},
    TimePeriod:{type:String},
});
module.exports =mongoose.model("InsuranceDetails",InsuranceDetails);