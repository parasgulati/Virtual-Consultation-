const mongoose=require('mongoose');
const Test=mongoose.Schema
({
    PatientId:{type:String},
    Link:{type:String}
});
module.exports =mongoose.model("Test",Test);