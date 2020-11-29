const mongoose=require('mongoose');
const DiseaseDescription=mongoose.Schema({
    SymptomName:{type:String},
    SymptomSeverity:{type:String}
});
module.exports =mongoose.model("DiseaseDescription",DiseaseDescription);