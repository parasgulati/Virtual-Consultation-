const mongoose=require('mongoose');
const InsuranceInstallmentDetails=mongoose.Schema({
    Month:{type:String},
    Year:{type:String},
    Amount:{type:String},
    TransactionId:{type:String}
});
module.exports =mongoose.model("InsuranceInstallmentDetails",InsuranceInstallmentDetails);