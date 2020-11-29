const mongoose=require('mongoose');
const DoctorCalender=mongoose.Schema({
    DoctorId:{type:String},
    FromDate:{type:String},
    FromTime:{type:String},
    ToDate:{type:String},
    ToTime:{type:String}
});
module.exports =mongoose.model("DoctorCalender",DoctorCalender);