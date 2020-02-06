const mongoose = require("mongoose");
const volunteerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    midname: String,
    lastname: String,
    telephone: String,
    address: String,
    finishedtasks: Number
});
module.exports=mongoose.model("Volunteer",volunteerSchema);