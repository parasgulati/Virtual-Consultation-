const mongoose=require('mongoose');
const AppointmentDetails=mongoose.Schema({
    AppointmentId:{type:String},
    Type:{type:String},
    SymptomName:{type:String},
    SymptomSeverity:{type:String},
    UploadedDocument:{type:String},
    TimeOfAppointment:{type:Number},
    DoctorId:{type:String},
    PatientId:{type:String}
});
module.exports =mongoose.model("AppointmentDetails",AppointmentDetails);