const mongoose=require('mongoose');
const InsuranceInstallmentAmountDue=mongoose.Schema({
    PolicyNumber:{type:String},
    MonthDue:{type:String},
    YearDue:{type:String},
    Amount:{type:String}
});
module.exports =mongoose.model("InsuranceInstallmentAmountDue",InsuranceInstallmentAmountDue);