const mongoose=require('mongoose');
const InsurancePolicy=mongoose.Schema({
    PolicyNumber:{type:String},
    InsuranceId:{type:String},
    DayOfStart:{type:String},   
    MonthOfStart:{type:String},
    YearOfStart:{type:String}
});
module.exports =mongoose.model("InsurancePolicy",InsurancePolicy);