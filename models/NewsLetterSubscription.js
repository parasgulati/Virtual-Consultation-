const mongoose=require('mongoose');
const NewsLetterSubscription=mongoose.Schema({
    Email:{type:String},
    Phone:{type:String}
});
module.exports =mongoose.model("NewsLetterSubscription",NewsLetterSubscription);
