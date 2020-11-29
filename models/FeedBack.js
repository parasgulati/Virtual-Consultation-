const mongoose=require('mongoose');
const FeedBack=mongoose.Schema({
    RatingForOverallSatisfaction:{type:String},
    RatingForDoctor:{type:String},
    RatingForService:{type:String},
    Comments:{type:String}
});
module.exports =mongoose.model("FeedBack",FeedBack);
