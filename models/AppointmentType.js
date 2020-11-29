const mongoose=require('mongoose');
const AppointmentType=mongoose.Schema({
    AppointmentType:{type:String},
    Fee:{type:String}
});
module.exports =mongoose.model("AppointmentType",AppointmentType);