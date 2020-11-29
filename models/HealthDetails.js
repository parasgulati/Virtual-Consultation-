const mongoose=require('mongoose');
const HealthDetails=mongoose.Schema({
    PatientId:{type:String},
    Timestamp:{type:Number},
    Weight:{type:Number},
    BloodPressure:{type:Number},
    StepsWalk:{type:Number},
    StepsWalkFromTimestamp:{type:Number},
    StepsWalkToTimestamp:{type:Number}
});
module.exports =mongoose.model("HealthDetails",HealthDetails);
