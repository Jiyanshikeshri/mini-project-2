const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: String,
    email: String,
    Phone: String,
    event: String,
    registeredAt : {
        type : Date,
        default : Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});



module.exports = mongoose.model("Register", registerSchema);