// need to confirm 

const mongoose=require('mongoose');
const DoctorDetails=mongoose.Schema({
    DoctorId:{type:String},
    Name:{type:String},
    Qualification:{type:String},
    Expertise:{type:String},
    Experience:{type:String},
    Fees:{type:String}
});
module.exports =mongoose.model("DoctorDetails",DoctorDetails);