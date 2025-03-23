const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const Register = require("./register.js");

const clubSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        url: String,
        filename: String,
    },
    location:{
        type:String,
        required: true,
    },
    head:{
        type:String,
        required:true,
    },
    register : [
        {
        type: Schema.Types.ObjectId,
        ref: "Register",
    },
    ],
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

clubSchema.post("findOneAndDelete", async(club)=>{
    if(club){
        await Register.deleteMany({_id: {$in: club.register}});
    }
});

// const Club = mongoose.model("Club", clubSchema);
const Club = mongoose.models.Club || mongoose.model("Club", clubSchema);

module.exports = Club;